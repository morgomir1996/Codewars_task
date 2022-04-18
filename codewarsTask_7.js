//  https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript


function rgb(r, g, b) {
  function toHexVal(val) {
    if (val > 255) {
      val = 255;
    }
    if (val < 0) {
      val = 0;
    }
    const hexedVal = val.toString(16);
    if (hexedVal.length === 1) {
      return "0" + hexedVal;
    } else {
      return hexedVal;
    }
  }
  const hexColor = toHexVal(r) + toHexVal(g) + toHexVal(b);

  return hexColor.toUpperCase();
}
