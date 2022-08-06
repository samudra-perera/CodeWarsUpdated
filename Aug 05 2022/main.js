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