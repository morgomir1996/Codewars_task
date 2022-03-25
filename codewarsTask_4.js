//   https://www.codewars.com/kata/51e056fe544cf36c410000fb/solutions/javascript


function topThreeWords(text) {
  const smallerText = text.toLocaleLowerCase();

  function validationText(text) {
    let validText = "";
    for (let i in text) {
      if (text[i].charCodeAt() >= 97 && text[i].charCodeAt() <= 122) {
        validText += text[i];
      }
      if (text[i].charCodeAt() === 32 || text[i].charCodeAt() === 39) {
        validText += text[i];
      }
    }
    return validText;
  }

  const clearText = validationText(smallerText);

  let words = [];
  let word = "";

  for (let i = 0; i <= clearText.length; i++) {
    if (clearText[i] !== " ") {
      word += clearText[i];
    }
    if (clearText[i] === " " && word.length > 0) {
      words.push(word);
      word = "";
    }
    if (i === clearText.length - 1 && word.length > 0) {
      words.push(word);
    }
  }

  const uniqueWords = [...new Set(words)];

  const wordsSet = [];
  const counters = [];
  for (let i in uniqueWords) {
    let countWords = words.filter((x) => x === uniqueWords[i]);
    wordsSet.push({
      key: uniqueWords[i],
      value: countWords.length,
    });
    counters.push(countWords.length);
  }

  const sortedCounters = [...new Set(counters.sort((a, b) => b - a))];
  const topWords = [];
  for (let i in sortedCounters) {
    for (let j in wordsSet) {
      if (sortedCounters[i] === wordsSet[j].value && wordsSet[j].key !== "'") {
        topWords.push(wordsSet[j].key);
      }
    }
  }

  return topWords.slice(0, 3);
}
