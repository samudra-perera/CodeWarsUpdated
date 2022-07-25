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
  let base = Number(str1.split('').pop());
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

  //Simply return 
  return Number((base ** power).toString().split('').pop())
}

lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")