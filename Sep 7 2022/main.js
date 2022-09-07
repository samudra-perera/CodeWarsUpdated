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
    throw new RangeError
  }
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total*=i
  }
  return total
}

factorial(5)

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
    for(let i = 2; i <= Math.sqrt(num); i++) { // Checking all numbers from 2 to the sqrt of N 
        if(num % i === 0) return false; 
    }
    return num >= 1;
}