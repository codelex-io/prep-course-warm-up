export {};

function getRandomNumber() {
  return Math.round(Math.random() * 10);
}

const result = getRandomNumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
