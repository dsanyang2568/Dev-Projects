
function countVowelsAndConsonants(inputString) {
  let vowelsCount = 0;
  const vowelLetters = ["a", "e", "i", "o", "u"];
  let consonantsCount = 0;
  const results = {};

  for (const char of inputString) {
    if (vowelLetters.includes(char.toLowerCase())) {
      vowelsCount += 1;
    } else {
      consonantsCount += 1
    }
  }
  results.vowels = vowelsCount;
  results.consonants = consonantsCount; 
  return results;
}

// // From Solution
// function countVowelsAndConsonants(inputString) {
//   let vowelsCount = 0;
//   let consonantsCount = 0;
//   const vowelLetters = "aeiou";  

//   for (const letter of inputString) {
//     if (vowelLetters.includes(letter.toLowerCase())) {
//       vowelsCount++;
//     } else if (letter.toLowerCase() !== letter.toUpperCase()){
//       consonantsCount++;
//     }
//   }
//   return { vowels: vowelsCount, consonants: consonantsCount };
// }

const display = countVowelsAndConsonants("javascript");
// const display1 = countVowelsAndConsonants("ProgrammingInJavaScript");
const display1 = countVowelsAndConsonants("FUNCTIONALprogramming");

console.log(display1);

