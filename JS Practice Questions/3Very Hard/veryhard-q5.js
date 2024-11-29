
// function findLargestAgeDifference(agePairs) {
  
//   if (agePairs.length === 0) return 0;
//   const ageDifferenceArray = [];

//   for (let i = 0; i < agePairs.length; i++) {
//     let ageDifference = Math.abs(agePairs[i][0] - agePairs[i][1]);
//     ageDifferenceArray.push(ageDifference);
//   }

//   ageDifferenceArray.sort((a, b) => b - a);
//   return ageDifferenceArray[0];
// }

// From solution
function findLargestAgeDifference(agePairs) {
  if (agePairs.length === 0) return 0; // Handle empty array case
  let largestDifference = 0;

  for (let i = 0; i < agePairs.length; i++) {
    let currentDifference = Math.abs(agePairs[i][0] - agePairs[i][1]);
    // Update largestDifference if currentDifference is greater
    if (currentDifference > largestDifference) {
      largestDifference = currentDifference;
    }
  }

  return largestDifference;
}

const result = findLargestAgeDifference([[18, 30], [29, 40], [50, 60]]);
console.log(result);


// // Return an array instead
// function findLargestAgeDifference(agePairs) {
//   if (agePairs.length === 0) return 0;
  
//   for (let i = 0; i < agePairs.length; i++) {
//     if (agePairs.length === 1) {
//       return Math.abs(agePairs[0][0] - agePairs[0][1]);
//     }
//     const currentSubArray = i;
//     const largestSubArray = currentSubArray;
//     for (let j = 0; j < i.length; j++) {
//       const currentAgeDifference = agePairs[i][j] - agePairs[i][j+1];              
//       const largetAgeDifference = Math.abs(currentAgeDifference);
//     }
//     return largestSubArray;
//   } 
// }

