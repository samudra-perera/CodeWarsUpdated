/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
    return l.filter(elem => typeof(elem) == 'number')
}

/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    return Math.min(...s.split(' ').map(elem => elem.length))
}

/* 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    return (Number.isInteger(Math.sqrt(sq))) ? (Math.sqrt(sq) + 1)**2 : -1;
}

/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a-b)
    return sorted[0] + sorted[1]
  }

  /* Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
*/

//Hardcoded the last bit, this wouldn't work if the element is length 1
function solution (roman) {
    let romankey = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let year = 0;
    roman = roman.split('').map(elem => romankey[elem])
    for(let i = 0; i < roman.length; i++) {
        if(roman[i] >= roman[i+1]) {
            year+=roman[i]
        } else if(roman[i] < roman[i+1]) {
            year-=roman[i]
        } else {
            year+=roman[i]
        }
    }
    return year
  }

solution('IV')