// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

function reverseNumber(n) {
let strN = String(n);
let reversedN = "";
for (let i = strN.length
 -1; i >= 0; i--) {
  reversedN += strN[i];
}
if (reversedN[reversedN.length -1] === "-") {
  return Number("-" + reversedN.slice(0, [reversedN.length -1]));
  } else {
  return Number(reversedN) ;
  }
}
