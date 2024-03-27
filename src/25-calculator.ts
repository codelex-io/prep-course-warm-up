export {};

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sum(num: number[]): number {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
const result = sum([1,2,3]);




function multiply(num: number[]): any {
    let result = 1;
    for (let i = 0; i < num.length; i++){
       result *= num[i];
    }
    return result;
   
}

function power(a: number, b: number): number {
    return Math.pow(a,b);
}
const output = power(2,3);




console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
