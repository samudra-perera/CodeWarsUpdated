/* You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

*/

function longestConsec(strarr, k) {
    // Edge case where the numbers of strings to be concat is greater than the number of elems in the array 
    if(k > strarr.length) {
        return ""
    }

    //To store the strings and the length of the strings
    let concat = [];
    let lens = [];
    for(let i = 0; i <= strarr.length - k; i++) {
        // Since we are concat strings, we need to initialize the concat[i] as a string prior to the addtiona
        concat[i] = ''
        for(let j = 0; j < k; j++) {
            concat[i] += strarr[i+j]
        }
        // After the strings are concat add the length to the lens array 
        lens[i] = concat[i].length
    }

    //Returns the first instance of the largest length
    return concat[lens.indexOf(Math.max(...lens))]
}


/* 

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
    let obj = {};
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i)
        if(obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
    }
     return obj;
  }
  
  // Done with forEach()
  function count (string) {  
    let count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

/* A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox' */


/// Do This before sleep
function titleCase(title, minorWords) {
    const minorArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase()
    .split(' ')
    .map((elem, index) => {
        // Case of empty string
        if(elem == '') return elem;
        //To avoid the first word being in the minorWords 
        if(minorArr.indexOf(elem) > -1 && index !== 0) return elem
        return elem[0].toUpperCase() + elem.slice(1);
    }).join(' ') 
}

titleCase('the clash of KINGS', 'a an the of')

/* Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/

function findNb(m) {
    let count = 1;
    let remainder = m
    while(remainder > 0) {
        remainder -= (count**3)
        if(remainder == 0) {
            break
        }
        count++
    }
    return (remainder == 0) ? count : -1
}

//Refactored
function findNb(m) {
    let count = 0;
    while(m > 0) {
        count++
        m-=count**3 
    }
    return (m == 0) ? count : -1
}
findNb(1071225)


/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
    string = string.split('')
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] == ' ') {
            //Everytime there is a space == new word next so reset even count to ensure first char is alway uppercase 
            count = 0;
            continue
        } else if (count % 2 == 0) {
            string[i] = string[i].toUpperCase()
            count++
        } else {
            //To handle cases of all capitalize
            string[i] = string[i].toLowerCase()
            count++
        }
    }
    return string.join('')
  }

  toWeirdCase('Weird string case')