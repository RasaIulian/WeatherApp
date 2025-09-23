const formatTime = (timestamp, offset) => {
  if (typeof timestamp !== "number" || isNaN(timestamp)) {
    return "N/A";
  }
  return new Date((timestamp + offset) * 1000).toISOString().substring(11, 16);
};

export const SunMoonTimes = ({
  sunrise,
  sunset,
  moonrise,
  moonset,
  timezoneOffset,
}) => {
  const now = new Date();
  const sunsetTime = new Date((sunset + timezoneOffset) * 1000);

  return (
    <>
      {/* Moonrise: <br />
      {formatTime(moonrise, timezoneOffset)}
      <br />
      <br />
      Moonset:
      <br />
      {formatTime(moonset, timezoneOffset)}
      <br />
      <br /> */}
      Sunrise: <br />
      {formatTime(sunrise, timezoneOffset)}
      <br />
      <br />
      Sunset: <br />
      {formatTime(sunset, timezoneOffset)}
    </>
  );
};
