//  https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript


function solution(number) {
  if (number > 3) {
    let numbers = [];
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        numbers.push(i);
      }
    }
    const uniqueNums = [...new Set(numbers)];
    const sumNums = uniqueNums.reduce((a, b) => a + b);
    return sumNums;
  }
  return 0;
}
