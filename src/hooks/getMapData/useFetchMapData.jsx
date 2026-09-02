import { useState, useEffect, useRef } from "react";

/**
 * Precipitation radar uses RainViewer's public Weather Maps API instead
 * of OpenWeatherMap. RainViewer gives real sequential radar frames (past ~2h
 * + short nowcast, refreshed every 5 min, free, no API key)
 *
 * Non-precipitation overlays (clouds, temperature, wind, pressure) stay on
 * OpenWeatherMap's free "Maps 1.0" tile endpoint.
 *
 * NOTE: RainViewer's free tier requires visible attribution — show
 * "Weather data by RainViewer" (linked to rainviewer.com) near the map
 * whenever the precipitation layer is active.
 */

const RAINVIEWER_API = "https://api.rainviewer.com/public/weather-maps.json";
const OWM_FORECAST_API = "https://api.openweathermap.org/data/2.5/forecast";

const staticLayerIds = {
  clouds: "clouds_new",
  temperature: "temp_new",
  wind: "wind_new",
  pressure: "pressure_new",
};

const RADAR_LAYER_A = "radar-a";
const RADAR_LAYER_B = "radar-b";
const STATIC_LAYER = "static-layer";
const BASE_INTERVAL_MS = 800; // time between radar frames at 1x speed
const STATIC_BASE_INTERVAL_MS = 2000; // time between cosmetic ticks at 1x speed

const useFetchMapData = (
  latitude,
  longitude,
  mapRef,
  mapLoaded,
  layerOpacity,
  selectedMapType,
  animationPlaying = true,
  animationSpeed = 1,
) => {
  const [forecastTimes, setForecastTimes] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const weatherApiKey = process.env.REACT_APP_Weather_API_KEY;

  // Refs mirror the latest prop values so the animation loop (set up once
  // per location/layer-type change) always reads current settings without
  // needing to be torn down and rebuilt on every opacity/speed/play toggle.
  const layerOpacityRef = useRef(layerOpacity);
  const animationPlayingRef = useRef(animationPlaying);
  const animationSpeedRef = useRef(animationSpeed);

  const framesRef = useRef([]);
  const hostRef = useRef("");
  const activeLayerRef = useRef(RADAR_LAYER_A);
  const idleLayerRef = useRef(RADAR_LAYER_B);
  const stepRef = useRef(0);
  const timeoutRef = useRef(null);

  // Cosmetic ticking state for the non-precipitation (static-image) layers.
  const staticTimesRef = useRef([]);
  const staticStepRef = useRef(0);
  const staticLayerNameRef = useRef(null);
  const staticTimeoutRef = useRef(null);

  useEffect(() => {
    layerOpacityRef.current = layerOpacity;
    const map = mapRef.current;
    if (!map) return;
    if (map.getLayer(STATIC_LAYER)) {
      map.setPaintProperty(STATIC_LAYER, "raster-opacity", layerOpacity);
    }
    if (map.getLayer(activeLayerRef.current)) {
      map.setPaintProperty(
        activeLayerRef.current,
        "raster-opacity",
        layerOpacity,
      );
    }
  }, [layerOpacity, mapRef]);

  useEffect(() => {
    animationPlayingRef.current = animationPlaying;
    // If animation was paused and is now resumed, kick the relevant loop again.
    if (animationPlaying && !timeoutRef.current && !staticTimeoutRef.current) {
      if (selectedMapType === "precipitation") {
        scheduleNextFrame();
      } else if (selectedMapType !== "none") {
        scheduleNextStaticTick();
      }
    }
  }, [animationPlaying]);

  useEffect(() => {
    animationSpeedRef.current = animationSpeed;
  }, [animationSpeed]);

  const tileUrl = (host, path) => `${host}${path}/256/{z}/{x}/{y}/2/1_1.png`; // color scheme 2, smooth=1, snow=1

  const removeLayer = (id) => {
    const map = mapRef.current;
    if (!map) return;
    if (map.getLayer(id)) map.removeLayer(id);
    if (map.getSource(id)) map.removeSource(id);
  };

  const cleanupAllLayers = () => {
    removeLayer(RADAR_LAYER_A);
    removeLayer(RADAR_LAYER_B);
    removeLayer(STATIC_LAYER);
  };

  const scheduleNextFrame = () => {
    const interval = Math.max(
      300,
      BASE_INTERVAL_MS / animationSpeedRef.current,
    );
    timeoutRef.current = setTimeout(advanceFrame, interval);
  };

  const advanceFrame = () => {
    const map = mapRef.current;
    const frames = framesRef.current;
    timeoutRef.current = null;

    if (!map || frames.length === 0 || !map.getSource(idleLayerRef.current)) {
      return;
    }

    stepRef.current = (stepRef.current + 1) % frames.length;
    setCurrentStep(stepRef.current);

    const idleId = idleLayerRef.current;
    const activeId = activeLayerRef.current;

    // Preload the next tile onto the idle (invisible) layer first, then
    // crossfade once it's actually loaded — this removes the blank gap
    // the old opacity-0-then-swap approach had.
    map
      .getSource(idleId)
      .setTiles([tileUrl(hostRef.current, frames[stepRef.current].path)]);

    map.once("idle", () => {
      if (!mapRef.current) return;
      map.setPaintProperty(idleId, "raster-opacity", layerOpacityRef.current);
      map.setPaintProperty(activeId, "raster-opacity", 0);
      activeLayerRef.current = idleId;
      idleLayerRef.current = activeId;

      if (animationPlayingRef.current) scheduleNextFrame();
    });
  };

  const staticTileUrl = (layerName, timestamp) =>
    `https://tile.openweathermap.org/map/${layerName}/{z}/{x}/{y}.png?appid=${weatherApiKey}${
      timestamp ? `&date=${timestamp}` : ""
    }`;
  // NOTE: `date` is accepted but ignored by this free endpoint — the image
  // never actually changes. It's kept in the URL only to mirror prior
  // behavior; see the file header comment for why.

  const scheduleNextStaticTick = () => {
    const interval = Math.max(
      500,
      STATIC_BASE_INTERVAL_MS / animationSpeedRef.current,
    );
    staticTimeoutRef.current = setTimeout(advanceStaticFrame, interval);
  };

  const advanceStaticFrame = () => {
    const map = mapRef.current;
    const times = staticTimesRef.current;
    staticTimeoutRef.current = null;

    if (!map || times.length === 0 || !map.getSource(STATIC_LAYER)) return;

    staticStepRef.current = (staticStepRef.current + 1) % times.length;
    setCurrentStep(staticStepRef.current);

    // Brief fade pulse to signal a "frame change" even though the
    // underlying tile image is identical (see header comment).
    map.setPaintProperty(STATIC_LAYER, "raster-opacity", 0);
    setTimeout(() => {
      if (!mapRef.current || !mapRef.current.getSource(STATIC_LAYER)) return;
      mapRef.current
        .getSource(STATIC_LAYER)
        .setTiles([
          staticTileUrl(
            staticLayerNameRef.current,
            times[staticStepRef.current],
          ),
        ]);
      mapRef.current.setPaintProperty(
        STATIC_LAYER,
        "raster-opacity",
        layerOpacityRef.current,
      );
    }, 200);

    if (animationPlayingRef.current) scheduleNextStaticTick();
  };

  const setupStaticLayer = async (map, layerName) => {
    staticLayerNameRef.current = layerName;

    map.addSource(STATIC_LAYER, {
      type: "raster",
      tiles: [staticTileUrl(layerName)],
      tileSize: 256,
    });
    map.addLayer({
      id: STATIC_LAYER,
      type: "raster",
      source: STATIC_LAYER,
      paint: {
        "raster-opacity": layerOpacityRef.current,
        "raster-opacity-transition": { duration: 400 },
        "raster-resampling": "linear",
      },
    });

    // Fetch real forecast timestamps (free endpoint) purely to drive the
    // ticking clock label — the tile image itself won't change per step.
    try {
      const res = await fetch(
        `${OWM_FORECAST_API}?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}`,
      );
      const data = await res.json();
      if (!mapRef.current || !data.list) return;

      const next24h = data.list.filter(
        (item) => item.dt <= Math.floor(Date.now() / 1000) + 24 * 3600,
      );
      if (next24h.length === 0) return;

      const times = next24h.map((item) => item.dt);
      staticTimesRef.current = times;
      staticStepRef.current = 0;
      setForecastTimes(times);
      setCurrentStep(0);

      if (animationPlayingRef.current) scheduleNextStaticTick();
    } catch (error) {
      console.error("Error fetching forecast timestamps:", error);
    }
  };

  const setupRadarLayers = (map, host, frames) => {
    [RADAR_LAYER_A, RADAR_LAYER_B].forEach((id, i) => {
      map.addSource(id, {
        type: "raster",
        tiles: [tileUrl(host, frames[stepRef.current].path)],
        tileSize: 256,
        // RainViewer's radar tiles only exist up to zoom 7. Capping
        // maxzoom here tells Mapbox to oversample (stretch) the zoom-7
        // tile when the user zooms in further, instead of requesting
        // tiles that don't exist and erroring.
        maxzoom: 7,
      });
      map.addLayer({
        id,
        type: "raster",
        source: id,
        paint: {
          "raster-opacity": i === 0 ? layerOpacityRef.current : 0,
          "raster-opacity-transition": { duration: 400 },
          "raster-resampling": "linear",
        },
      });
    });
    activeLayerRef.current = RADAR_LAYER_A;
    idleLayerRef.current = RADAR_LAYER_B;
  };

  useEffect(() => {
    let cancelled = false;

    if (!mapLoaded || !latitude || !longitude || !mapRef.current) return;
    const map = mapRef.current;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    clearTimeout(staticTimeoutRef.current);
    staticTimeoutRef.current = null;
    cleanupAllLayers();
    setForecastTimes([]);
    setCurrentStep(0);

    if (selectedMapType === "none") return;

    if (selectedMapType !== "precipitation") {
      const layerName = staticLayerIds[selectedMapType];
      if (layerName) setupStaticLayer(map, layerName);
      return () => {
        clearTimeout(staticTimeoutRef.current);
        staticTimeoutRef.current = null;
        cleanupAllLayers();
      };
    }

    // Precipitation: fetch RainViewer frame list, then animate.
    (async () => {
      try {
        const res = await fetch(RAINVIEWER_API);
        const data = await res.json();
        if (cancelled || !mapRef.current) return;

        const frames = [
          ...(data.radar?.past || []),
          ...(data.radar?.nowcast || []),
        ];
        if (frames.length === 0) {
          console.error("RainViewer returned no radar frames");
          return;
        }

        framesRef.current = frames;
        hostRef.current = data.host;
        stepRef.current = frames.length - 1; // start on most recent observed frame
        setForecastTimes(frames.map((f) => f.time));
        setCurrentStep(stepRef.current);

        setupRadarLayers(map, data.host, frames);

        if (animationPlayingRef.current) scheduleNextFrame();
      } catch (error) {
        console.error("Error fetching RainViewer radar data:", error);
      }
    })();

    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      cleanupAllLayers();
    };
  }, [latitude, longitude, mapLoaded, mapRef, selectedMapType]);

  return { forecastTimes, currentStep };
};

export default useFetchMapData;
