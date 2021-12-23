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
let newArr = [];
let counter = 0;
 for (i = 0; i < arr.length; i++) {
   let currentElement = arr[i];
   for (j = 0; j < newArr.length; j++) {
     let newArrElement = newArr[j];
     if(currentElement === newArrElement) {
       counter++;
     }
   }
   if (counter < n) {
   newArr.push(currentElement);
   }
   counter = 0;
 }
  return newArr;
}
