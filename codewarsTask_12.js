//    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript


function reverseWords(str) {
  const splitStr = str.split(" ");
  const wordsRev = splitStr.map((x)=> x.split("").reverse().join(""));
  return wordsRev.join(" ");
}
