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

isPangram("The quick brown fox jumps over the lazy dog.")