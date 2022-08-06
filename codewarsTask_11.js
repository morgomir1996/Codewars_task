//  https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript


function wordPattern(word) {
  const lowReg = word.toLowerCase();
  const setLettrs = [...new Set(word.toLowerCase())];
  function findNumbers(lowReg, setLettrs) {
    const result = [];
    for (let i = 0; i < lowReg.length; i++) {
      for (let j = 0; j < setLettrs.length; j++) {
        if (lowReg[i] === setLettrs[j]) {
          result.push(j);
        }
      }
    }
    return result;
  }
  const result = findNumbers(lowReg, setLettrs);
  return result.join(".");
}
