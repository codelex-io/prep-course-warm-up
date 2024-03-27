export {};

const repeatString = (str: string, timesToRepeat: number): string => {
 // return str.repeat(timesToRepeat);
    let result = str;
    for(let i = 1; i < timesToRepeat; i++){
        result += str;   //result = result + str;
    }
    return result; 
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("bob", 5)); // Expected output: 'bbbbb'
