export function millisToMinutesAndSeconds(millis: number) {
  let minutes = Math.floor(millis / 60000);
  let seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export function formatFancyDuration(milliseconds: number) {
  let seconds = Math.floor((milliseconds / 1000) % 60);
  let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  let dayString = days > 1 ? "days" : "day";
  let hourString = hours > 1 ? "hours" : "hour";
  let minuteString = minutes > 1 ? "minutes" : "minute";
  let secondString = seconds > 1 ? "seconds" : "second";

  if (days > 0) {
    return days + " " + dayString + ", " + hours + " " + hourString;
  } else if (hours > 0) {
    return hours + " " + hourString + ", " + minutes + " " + minuteString;
  } else {
    return minutes + " " + minuteString + ", " + seconds + " " + secondString;
  }
}
