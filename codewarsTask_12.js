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



//   https://www.codewars.com/kata/581c6b075cfa83852700021f/train/javascript


function indexOf(head, value) {
  let index=0
  while(head) {
    if (head.data===value){return index}
    head = head.next;
    index++
  }
  return -1;
}



//  https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

function removeConsecutiveDuplicates(s) {
  const arr = s.split(" ");
  const clearArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      clearArr.push(arr[i]);
    }
  }
  return clearArr.join(" ");
}
