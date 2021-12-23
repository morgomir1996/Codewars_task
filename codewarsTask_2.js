// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
let newStr = str.split(' ')
let pigIt = "";
for (i = 0; i < newStr.length; i++) {
    let currentWord = newStr[i];
    if (currentWord != "," && currentWord != "." && currentWord != "!" && currentWord != "?") {
        if (i != 0) {
          pigIt += " " + currentWord.slice(1, (currentWord.length)) + currentWord[0] + "ay";
          } 
          else { pigIt += currentWord.slice(1, (currentWord.length)) + currentWord[0] + "ay"; } 
    } else {pigIt += " " + currentWord}
}
return pigIt; 
}



//    https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  let checkedWords = [];
for (i = 0; i < words.length; i++) {
  let currentWord = words[i];
  if (word.split("").sort().join("") === currentWord.split("").sort().join("")){
   checkedWords.push(currentWord);
  }
}
  return checkedWords;
}



//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript


function deleteNth(arr, n) {
    const uniqueArr = [...new Set(arr)];
    let newArr = [];
    for (i = 0; i < uniqueArr.length; i++) {
        let currentElement = uniqueArr[i];
        let filteredArr = arr.filter(function checkNubmer(currentValue) {
            return currentValue === currentElement;
        });
        let counter = filteredArr.length;
        if (counter > n) {
            counter = n;
        } else {
            counter === filteredArr.length
        }
        for (k = 0; k < counter; k++) {
            newArr.push(currentElement);
        }
    }
    return newArr;
}
