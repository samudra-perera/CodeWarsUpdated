/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    let vowels = 'aeiouAEIOU';
    //splits string in an array then checks if each letter against the vowels string...if it matches is it not returned 
    return str.split('').filter(elem => (!vowels.includes(elem))).join('')
  }

/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
    if (numbers.split(' ').length == 1) {
        return numbers + ' ' + numbers
    }
    let sorted = numbers.split(' ').sort((a,b) => Number(a) - Number(b))
    return sorted.pop() + ' ' + sorted.shift()
  }

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number).sort((a,b) => a - b)
    return `${numbers[numbers.length - 1]} ${numbers[0]}`
}

/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
    if(s.length % 2 == 0) {
        return s.slice(s.length/2 - 1, s.length/2 + 1)
    } else {
        return s.slice(Math.ceil(s.length/2) - 1, Math.ceil(s.length/2))
    }
}

function getMiddle(string) {
    let middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
    }
  }

  /* 
  There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/ 

function findUniq(arr) {
    arr.sort((a,b) => a-b)
    return (arr[0] == arr[0+1]) ? arr[arr.length - 1] : arr[0]
}
  
