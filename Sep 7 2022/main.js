/* You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN
To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/
So here we passed one valley
*/

function countingValleys(s) {
    let key = {
        'F': 0, 'U': 1, 'D': -1
    }
    let valleyCount = 0 // Keeps track of the number of valleys
    let valley = 0; // Keeps track of the current level
    for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i) // The current character
        valley+=key[char]
        if(valley == 0 && (valley - key[char] < 0)) { //only need to check if we exited a valley 
            valleyCount++
        }
    }
    return valleyCount
  }

/* In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here. */

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError //For JS cannot handle large Int values
  }
  let total = 1;
  for (let i = 1; i <= n; i++) { //Factorial calculation, can be done with a while loop aswell
    total*=i
  }
  return total
}

/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  false 
is_prime(2)  true  
is_prime(-1)  false 
*/

const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++) { // Checking all numbers from 2 to the sqrt of N since N^2 will include itself as a factor
        if(num % i === 0) return false; 
    }
    return num >= 1;
}

/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/

function inArray(array1,array2){
    array2 = array2.join(' ') // create one long string so we can search using .includes
    let result = array1.filter(elem => array2.includes(elem)).sort() // Filter any strings that are substrings of array2 and sort the result
    return result 
  }

/* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function findMissingLetter(array) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'; // Alphabet String 
  let substring =  alpha.slice(alpha.indexOf(array[0].toLowerCase())).split('') // Creating the substring to be searched
  for(let i = 0; i < array.length; i++) {
        if(array[i].toLowerCase() == substring[i]) { //checks the array to the substing index
            continue //if true check the next index
        } else { //if false return the substring index and check if original input was lower or uppercase
            return (array[0].toUpperCase() == array[0]) ? substring[i].toUpperCase() : substring[i]
        }
    }
}
