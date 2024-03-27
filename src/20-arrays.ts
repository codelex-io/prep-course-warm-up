export {};

/**
 * So far you've been working with numeric and textual data using JS data types - numbers
 * and strings. But there are many more data types in JS. One of them is arrays.
 * Here are a few resources that might help to better understand what arrays are for:
 *  - https://www.w3schools.com/js/js_arrays.asp
 *  - https://javascript.info/array
 */

function stringToArray(fullName: string): string[] {
  return fullName.split(" ");
}

const nameArray = stringToArray("John Doe");
console.log(nameArray); // Expected output: ['John', 'Doe']
