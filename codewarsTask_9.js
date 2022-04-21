//  https://www.codewars.com/kata/586538146b56991861000293/train/javascript


function to_nato(words) {
  const str =
    "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta Golf Tango Sierra Hotel Mike Papa Xray Victor Zulu Lima Quebec Bravo Kilo Whiskey Juliett , . ! ?";

  const vocabulary = str.split(" ");
  const letters = words.toUpperCase().split(" ").join("").split("");

  function mapper(letter) {
    for (i = 0; i < vocabulary.length; i++) {
      let word = vocabulary[i];
      if (word[0] === letter) {
        return word;
      }
    }
  }

  const answer = letters.map((letter) => (letter = mapper(letter)));

  return answer.join(" ");
}
