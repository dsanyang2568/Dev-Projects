
function sumEvenNumbers(numbers){
  let total = 0;
  for (const i of numbers) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

const result = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
const result1 = sumEvenNumbers([1, 3, 5, 7, 9]);
const result2 = sumEvenNumbers([-2, -4, -6, -8, -10]);
console.log(result2);