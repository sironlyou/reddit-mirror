export function getTimeFromTimestamp(timestamp: number) {
  var end = Date.now();
  var elapsed = end - timestamp * 1000;
  var seconds = Math.trunc(elapsed / 1000);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor((seconds % 3600) % 60);

  var hDisplay = h > 0 ? h + "ч " : "";
  var mDisplay = h > 0 ? "" : m + "мин ";
  var sDisplay = m > 0 ? "" : s + "сек";
  return hDisplay + mDisplay + sDisplay;
}
