export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: any) => {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

const max = (array: any) => {
  let max = array[0];
  for (let i = 1; i > max; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
{
    const min = (array: any) => Math.min(...array);
    const max = (array: any) => Math.max(...array);
}

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
