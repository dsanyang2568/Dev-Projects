
function findUniqueCharacters(str) {

  let newString = "";

  // for (let i = 0; i < str.length; i++) {
  //   if (newString.includes(char)) {
  //     continue;
  //   }
  //   newString.append(char)
  //   // const element = array[i];  
  // }
  for (const char of str) {
    if (!newString.includes(char)) {
      // continue;
      newString += char;
    }
    // newString += char;
  }

  return newString;
}

const result = findUniqueCharacters("bubble");
console.log(result); // Output: bule