// 5KYU

/* 
Watch youtube video before doing this https://www.youtube.com/watch?v=cQm__9qnXIw

Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 
7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0
Remarks
JavaScript, C++, R, PureScript, COBOL
Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

*/

var lastDigit = function(str1, str2){  
  //returns the base last character of the string
  let base = Number(str1.split('').pop());
  
  //returns the last two charaters of the string
  let power = Number(str2.slice(-2)) % 4;

  // if the power is = 0, then the lastdigit is always one
  if(str2 == 0) {
    return 1;
   
  }

  // Base of 0,1,5, and 6 always returns the base as the last digit
  if (base == 0 || base == 1 || base == 5 || base == 6) {
    return base
  }

  //if after the modulo operator the power is 0, take power to = 0
  if(power == 0) {
    power = 4
  }

  //Simply return last character of this string as a Num
  return Number((base ** power).toString().split('').pop())
}

// 6KYU

/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  // creates array of alphabet
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  //.every() checks every alphabet letter against every lettter of the string, if all 26 cases come back true it returns true else false
  return alphabet.every(elem => string.toLowerCase().includes(elem))
}

/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function expression(number, operation) {
  if(!operation) {
    return number
  }
  return operation(number)
}

function zero(operation) { return expression(0, operation)}
function one(operation) { return expression(1, operation)}
function two(operation) { return expression(2, operation)}
function three(operation) { return expression(3, operation)}
function four(operation) { return expression(4, operation)}
function five(operation) { return expression(5, operation)}
function six(operation) { return expression(6, operation)}
function seven(operation) { return expression(7, operation)}
function eight(operation) { return expression(8, operation)}
function nine(operation) { return expression(9, operation)}

function plus(x) {
  return function(y) {
    return [x,y,y + x]
  }
}
function minus(x) {
  return function(y) {
    return y - x
  }
}
function times(x) {
  return function(y) {
    return y * x
  }
}
function dividedBy(x) {
  return function(y) {
    return Math.floor(y / x)
  }
}

// Explain whats going on
/*
four(plus(two()))

The complete chain of higher order function be completed
step1. two() --> returns exp(2) --> returns 2
step2. plus(2) --> returns function(y) {y + 2}
step3. four(function(y) {y + 2}) --> returns expression(4, function(y) {y + 2) --> return function(4) {4 + 2}
step4. returns 6
*/
