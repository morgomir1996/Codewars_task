// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


function pigIt(str){
let newStr = str.split(' ')
let pigIt = "";
for (i = 0; i < newStr.length; i++) {
    let currentWord = newStr[i];
        if (i != 0) {
          pigIt += " " + currentWord.slice(1, (currentWord.length)) + currentWord[0] + "ay";
          } 
          else { pigIt += currentWord.slice(1, (currentWord.length)) + currentWord[0] + "ay"; }

}
return pigIt; 
}
