// exe 1
// Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
// console.log(calFahrenheit(20)) //68

const calFahrenheit = (Celsius) => (Celsius * 9/5) + 32;
console.log(calFahrenheit(20));
// exe 2
// Write a function to reverse a number
// console.log(reverseNum(123)) //321

const reverseNum = (num) => {
    num = num + "";
    return parseFloat(num.split("").reverse().join(""));
}
console.log(reverseNum(123));
// exe 3
// Count number of Vowels in String
// Function `countVowel` returns the number of vowels in input string.
// console.log(countVowel("Hello")) //2

const countVowel = (vowels) => {
    let total = 0;
    for (let i = 0; i < vowels.length ; i ++) {
        if (vowels[i].includes("a")) {
            total += 1
        } else if (vowels[i].includes("e")){
            total += 1
        } else if (vowels[i].includes("i")) {
            total += 1
        } else if (vowels[i].includes("o")) {
            total += 1
        } else if (vowels[i].includes("u")) {
            total += 1
        } else {
            total += 0
        }
    }
    return total
}
console.log(countVowel("Hello"))



// exe 4
// Write a function to check if an input string is a palindrome
// Function `checkPalindrome` return a boolean value based on whether the input string is palindrome or not.
// a palindrome is a word, phrase or number which reads the same backwards as it does when being read forwards.
// console.log(findPalindrome("racecar")) //true

const findPalindrome = (palindrome) => {
    let str = palindrome.toString();
    if (str === str.split("").reverse().join("")) {
        return true;
    }
    return false;
}

console.log(findPalindrome("racecar"));

// exe 5
// Write a function to generate a random number
// Function `genRandom` return a generated random integer number between the provided start and end range.
// console.log(genRandom(1,10)) // random int between 1 to 10
const genRandom = (x, y) => {
    min = Math.ceil(x);
    max = Math.floor(y);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(genRandom(1,10));

// exe 6
// Write a function to find Factorial of a number
// Function `getFactorial` return the factorial of a number using the formula `n*(n-1)*(n-2)*…` .
// console.log(getFactorial(5)) // 120
const getFactorial = (num) => {
    if (num < 0 ) {
        return "Enter positive number";
    } else if ( num === 0) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i
        }
        return factorial
    }
}
console.log(getFactorial(5));

// exe 7
// Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// console.log(addNumber(10,45,34,130)) // 219


const addNumber = ()  => {
    let total = 0;
    for (let i = 0; i < arrnum.length ; i++) {
        // console.log(arrnum[i]);
        total += arrnum[i];
    }
    return total;
} 
const arrnum = [10,45,34,130];
console.log(addNumber());
