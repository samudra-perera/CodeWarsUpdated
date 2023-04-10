/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
    let nums = Number(strng.split('').filter(elem => Number(elem) >= 0).join('')) + 1
    let letters = strng.split('').filter(elem => !Boolean(Number(elem))).join('')
    return letters + nums
  }

  incrementString('foobar099')

  /// Return to these after learning Regex 

  /*
  Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
