//    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript


function reverseWords(str) {
  const splitStr = str.split(" ");
  const wordsRev = splitStr.map((x)=> x.split("").reverse().join(""));
  return wordsRev.join(" ");
}



//  https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/solutions/javascript


function last(x) {
  function revWordsInText(x) {
    return x.split(" ").map((x) => x.split("").reverse().join(""));
  }

  function alphabetSort(x) {
    return x.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join(" ");
  }

  const rewX = revWordsInText(x);
  const sortRevX = alphabetSort(rewX);

  return revWordsInText(sortRevX);
}
