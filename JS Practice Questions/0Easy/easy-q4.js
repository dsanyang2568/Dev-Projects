
// function findLongestWord(sentence) {
//   let charCount = 0;
//   const space = " ";
//   let longestWord = "";
//   let countArray = [];

//   for (const char of sentence) {
//     if (space.includes(char)) {      
//       charCount++;
//       // continue;
//     }    
//     longestWord += char;  
//     // countArray.push(charCount);
//     countArray.push(longestWord);
//   }  
//   return countArray;
// }

// From solution
function findLongestWord(sentence) {
  let longestWord = "";
  let currentWord = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = ""; // Reset current word for the next word
    } else {
      currentWord += sentence[i];
    }
  }

  return longestWord;
}

const theLongestWord = findLongestWord("The quick brown fox is jumping over the lazy dog");
const word = findLongestWord("Innovative technological advancements revolutionize traditional methodologies in various sectors.");
console.log(theLongestWord);
console.log(word);

