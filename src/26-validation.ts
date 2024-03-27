export {};

/**
 * Complete the function to check if passed argument satisfies the following:
 *
 *  - is a number
 *  - is an integer (not a float)
 *  - is not equal to any of the numbers in the array `excludedNums`
 */

const excludedNums = [6, 14, 91, 111];

// You are allowed to edit only this function
function validate(value: any): any {
  return (
    typeof value === "number" &&
    Number.isInteger(value) && 
    !excludedNums.includes(value)
    );
}

console.log(validate(6));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));
console.log(validate(true)); //falce)
console.log(validate([4, "34"])); //falce
console.log(validate(null)); //falce
console.log(validate({})); //falce
console.log(validate(() =>{})); //falce
/* 
  Expected output:
  
    false
    false
    true
    true
    false
*/
