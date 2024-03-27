export {};

function addNumbers(a: number, b: number, c: number) {
    return a + b + c;
}

const result = addNumbers(1, 3, 4);
const result1 = addNumbers(2, 3, 5);
const result2 = addNumbers(1, 3, 888);

console.log(result); // Expected output: 8
console.log(result1);
console.log(result2);
