//   https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript


function isOddHeavy(arr) {
  const sumOdd = arr.filter((x) => x % 2 !== 0);
  const sumNotOdd = arr.filter((x) => x % 2 === 0);

  function checkMaxNotOdd(sumOdd, sumNotOdd) {
    if (sumNotOdd.length > 0) {
      const maxNotOdd = sumNotOdd.reduce((a, b) => (b > a ? (a = b) : a));
      return sumOdd.every((a) => a > maxNotOdd);
    }
  }

  function sumOfNums(nums) {
    if (nums.length > 0) {
      return nums.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }
  if (checkMaxNotOdd(sumOdd, sumNotOdd) === true && sumOdd.length !== 0) {
    return sumOfNums(sumOdd) > sumOfNums(sumNotOdd);
  } else {
    return false;
  }
}
