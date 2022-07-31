/* 
Your task is to write function factorial.
*/

function factorial(n){
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum *= i
    }
    return sum
  }


/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

  var orderedCount = function (text) {
    let set = text.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total
    }, {})
    return Object.entries(obj)
  }

  /// This code works except for the case of the string being numbers

  var orderedCount = function(text) {
    let set = {};
    for(let i = 0; i < text.length; i++) {
        let char = text.charAt(i)
        if(set[char]) {
            set[char]++
        } else {
            set[char] = 1
        }
    }
    return set
  }


/* 
Task
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.

Example
For n = 10 and firstNumber = 2, the output should be 7



Input/Output
[input] integer n

A positive even integer.

Constraints: 4 ≤ n ≤ 1000.

[input] integer firstNumber/first_number/first-number

Constraints: 0 ≤ firstNumber ≤ n - 1

[output] an integer

*/

function circleOfNumbers(n, firstNumber) {
    return (firstNumber + n/2) % n
  }
  
circleOfNumbers(10,2)

/*

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/

function smallEnough(a, limit){
    let b = a.filter(elem => elem <= limit)
    return (b.length == a.length) ? true : false
}


function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }

/* 
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => Number(b) - Number(a)).join(''))
  }


  /* 
  Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    x = x.split(' ')
    let alpha = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16,
        'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z':26
    }
    let sumArray = Array(x.length).fill(0)
    for(let i = 0; i < x.length; i++) {
        for(let j = 0; j < x[i].length; j++) {
            let char = x[i].charAt(j)
            sumArray[i] += alpha[char]
        }
    }
    return x[sumArray.indexOf(Math.max(...sumArray))]
}
high('man i need a taxi up to ubud')


// Done using array methods
const charToScore = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };


function high(x){
    const array = x.split(" ");
    const arrayOfScores = array.map(word => word.split("").reduce((score, char) => score + charToScore[char], 0))
    const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
    return array[indexOfResult];
}