// Challenge 1

// Cara 1
// function grow(x) {
//   const result = x.reduce((acc, curr) => acc * curr);
//   return result;
// }

// Cara 2
function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

console.log(grow([1, 2, 3]));
