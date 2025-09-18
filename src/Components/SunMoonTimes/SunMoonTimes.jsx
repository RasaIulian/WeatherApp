const formatTime = (timestamp, offset) => {
  return new Date((timestamp + offset) * 1000).toISOString().substring(11, 16);
};

export const SunMoonTimes = ({
  sunrise,
  sunset,
  moonrise,
  moonset,
  timezoneOffset,
  isDaily,
}) => {
  const now = new Date();
  const sunsetTime = new Date((sunset + timezoneOffset) * 1000);

  const showMoonTimes = now > sunsetTime;

  if (isDaily) {
    return showMoonTimes ? (
      <>
        Moonrise:
        {formatTime(moonrise, timezoneOffset)}
        <br />
        <br />
        Moonset:
        {formatTime(moonset, timezoneOffset)}
      </>
    ) : (
      <>
        Sunrise: <br />
        {formatTime(sunrise, timezoneOffset)}
        <br />
        <br />
        Sunset: <br />
        {formatTime(sunset, timezoneOffset)}
      </>
    );
  }

  return showMoonTimes ? (
    <>
      Moonrise: {formatTime(moonrise, timezoneOffset)}
      <br />
      <br />
      Moonset: {formatTime(moonset, timezoneOffset)}
    </>
  ) : (
    <>
      Sunrise: {formatTime(sunrise, timezoneOffset)}
      <br />
      <br />
      Sunset: {formatTime(sunset, timezoneOffset)}
    </>
  );
};
