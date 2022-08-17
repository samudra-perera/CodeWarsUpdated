/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    let [first, last] = name.toUpperCase().split(' ')
    return first.charAt(0) + '.' + last.charAt(0)
}

/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"
*/

function contamination(text, char){
    return text.split('').map(elem => char).join('')
  }

/* Write a function which converts the input string to uppercase. */

function makeUpperCase(str) {
    return str.toUpperCase()
  }

/* Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/

function howMuchILoveYou(nbPetals) {
    let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return phrases[(nbPetals - 1) % 6]
}

/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    return Array(n).fill(0).map(elem => {
        elem = n
        return n--
    })
  };

  /*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    let pos = 0, neg = 0
    input.forEach(elem => {
        if(elem > 0) {
            pos++
        } else if (elem < 0){
            neg+=elem
        } else {
            pos+=0
        }
    })
    return (pos == 0 && neg == 0) ? [] : [pos, neg]
  }

  /* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    return x.map(elem => elem * 2)
}