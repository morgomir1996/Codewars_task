//  https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
  const ipNumbers = str.split(".").map((x) => (x = Number(x)));
  if (ipNumbers.length !== 4 || ipNumbers.join(".") !== str) {
    return false;
  }
  const ipCheck = ipNumbers.every((x) => x >= 0 && x <= 255);
  return ipCheck;
}
