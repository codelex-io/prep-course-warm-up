export {};

function trim(word: string): string {
  return word.trim();
}

const result = trim("CODELEX  ");
console.log(result); // Expected output: "CODELEX"
console.log(result.length); // Expected output: 7
