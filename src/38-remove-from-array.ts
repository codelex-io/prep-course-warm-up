export {};

//const removeFromArray = function() {};

const removeFromArray = function (number: number[], ...restNums: number[]): number[]
{
    return number.filter (number => !restNums.includes(number) )
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */