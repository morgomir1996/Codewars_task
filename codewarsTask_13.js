//  https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const str = value.toString();
  const digits = str.split("").map((x) => Math.pow(x, str.length)).reduce((a, b) => a + b);
  return Number(digits) === value;
}


//   https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript


function missingWord(nums, str) {
  const positions = nums.sort((a, b) => a - b);
  const letters = str.toLowerCase().split("").reduce((a, b) => (b !== " " ? a + b : a));
  const word = positions.map((x) => (x = letters[x])).join("");
  if (word.length === 3) {
    return word;
  } else {
    return "No mission today";
  }
}



//    https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  const vowels = ["e", "u", "i", "o", "a", "E", "U", "I", "O", "A"];

  function check(letter) {
    const answer = vowels.some((x) => x === letter);
    return answer;
  }

  return str.split("").filter((x) => check(x) === false).join("");
}


//   https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript


function nerdify(txt) {
  function repl(letter) {
    if (letter === "a" || letter === "A") {
      return 4;
    }
    if (letter === "e" || letter === "E") {
      return 3;
    }
    if (letter === "l") {
      return 1;
    }
    return letter;
  }

  return txt.split("").map((x) => (x = repl(x))).join("");
}
