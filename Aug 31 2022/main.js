/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    //To make the string the same case
    str = str.toLowerCase()
    //First check if each letter appears only once and check if consecutive letters exist
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        //Create a object with eachletter
        char = str.charAt(i)
        if(obj[char]) {
            obj[char]++
        } else {
            obj[char] = 1
        }
        if(char == str.charAt(i+1)) return false
    }
    //Check if any of the letters appear more than once
    for (const prop in obj) {
        if(obj[prop] > 1) {
            return false
        }
    }
    //Else Return true
    return true
  } 

  isIsogram('Samudr')

  ///How to write in one line using Set creation
  function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
  ///