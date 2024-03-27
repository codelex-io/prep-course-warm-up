export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function

const CONVERSION_FEE = 0.02;
const CONVERSION_RATE_EUR_USD = 1.09;
const CONVERSION_RATE_EUR_BRL = 5.6;
const CONVERSION_RATE_EUR_YEN = 155.6;

function formatCurrency(num: number): string{
    return num.toFixed(2);
}
function addFee(price: number): number{
    return price + price * CONVERSION_FEE;
}
function convertCurrency(price: number,rate: number): number {
    return price * rate;
}
// You are allowed to change this function


const product = "You don't know JS";
const price = 12.5;
const convertedToUSD = convertCurrency(price, CONVERSION_RATE_EUR_USD);
const priceInUSD = formatCurrency(addFee(convertedToUSD));
const priceInBRL = formatCurrency(addFee(convertCurrency(price, CONVERSION_RATE_EUR_BRL)));

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
