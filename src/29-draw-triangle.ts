export {};

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(n: number): any {
  let i = 0;
  i <= 3;
  for (let i = 1; i <= 3; i++) {
   console.log(" * " + i);
  }
}
draw(3);
/* Expected output:

    *
    **
    ***

*/ console.log("===================");

function draw1(n: number): any {
  let j = 0;
  j <= 5;
  for (let j = 1; j <= 5; j++) {
    console.log(" * " + j);
  }
}
draw1(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
