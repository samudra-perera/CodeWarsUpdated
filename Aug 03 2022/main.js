/* 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

function repeatStr (n, s) {
    let str = '';
    for(let i=1; i <=n; i++) {
        str+=s
    }
    return str
  }
// Alternatively
function repeatStr (n, s) {
    return s.repeat(n);
  }

/* Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.*/
// This can be done wiht less code with return arr.sort((a,b) => a - b)[0]

function SmallestIntegerFinder(arr) {
    let smallest
    for(let i = 0; i < arr.length - 1; i++) {
        //compares the consecutive elements to see if they are smaller
        if(arr[i] < arr[i+1]) {
            smallest = arr[i]
        } else {
            //this is to handle the case if the last element is smaller
            smallest = arr[i+1]
        }
    }
    return smallest
}

SmallestIntegerFinder([78,56,232,12,8])

/* 

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

function removeChar(str){
    //returns the string without the first and last char
    return str.slice(1, str.length -1)  
};


/* Simple, remove the spaces from the string, then return the resultant string. */
function noSpace(x){
    return x.split(' ').join('')
}

/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/


function squareSum(numbers){
    return numbers.reduce((acc, cur) => acc + cur**2, 0)
}

/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    return [...Array(num + 1).keys()].reduce((acc,cur) => acc + cur, 0)
}

/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let [x, o] = [0, 0]; 
    str = str.toLowerCase().split('')
    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'x') {
            x++
        } else if (str[i] == 'o') {
            o++
        }
    }
    return x == o
}

// Done with filter
function XO(str) {
    str = str.toLowerCase().split('')
    return str.filter(elem => elem === 'x').length == str.filter(elem => elem === 'o').length
}

/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	s = s.toLowerCase().split('')
    //to store string values 
    let store = []
    for(let i = 0; i < s.length; i++) {
        store[i] = s[i].toUpperCase() + s[i].repeat(i)
    }
    return store.join('-')
}
