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