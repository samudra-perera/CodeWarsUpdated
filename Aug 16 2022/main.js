/* Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 10)
  };

  /*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
  */

function toUnderscore(string) {
    let arr = [];
    if(typeof(string) == 'number') return string.toString()

    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if(i == 0) {
            arr[i] = char.toLowerCase()
        } else if(Number.isInteger(Number(char))) {
            arr[i] = char
        } else if (char == char.toUpperCase()) {
            arr[i] = '_' + char.toLowerCase()
        } else {
            arr[i] = char
        }
    }
    return arr.join('')
  }