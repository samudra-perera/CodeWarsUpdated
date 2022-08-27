/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output) */

var number=function(array){
    let result = []
    for(let i = 0; i < array.length; i++) {
        result[i] = `${i+1}: ` + array[i]
    }
    return result
  }

//Done using one line and map
const number = (array) => array.map((elem, index) => elem = `${index + 1}: ` + elem)

/*Task
A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T
Note
size of S goes up to 10^6
Keep the efficiency of your code in mind.
Do not mutate the Input.
*/

function arrange(s) {
    //Creates a copy of s so not to mutate the array
    let copy = s.map(elem => elem);
    //Creates a copy of s that is reverse so not to mutate the array
    let copyRev = s.slice(0).reverse().map(elem => elem)
    //Counter and index to be used in the while loop
    let counter = 0; //counter keeps track of the iterations
    let index = 0; // index keeps track of the total index except for the odd array final element
    //Empty array used to store the result
    let t = [];
    //Since we are going to take elems at once we only need to iterate half the length of the array
    while(counter < s.length/2) {
        //Special case when the array length is odd and we need to extract the final elem
        if(s.length % 2 == 1 && index == s.length - 1) {
            t[s.length - 1] = s[Math.floor(s.length / 2)]
            break
        }

        //if counter is even take elems from the s copy
        if(counter % 2 == 0) {
            t[index] = copy[counter]
            t[index + 1] = copy[(copy.length - 1) - counter]
            counter++
            index+=2
        } else if(counter % 2 == 1) { //if counter is odd take from the reverse copy
            t[index] = copyRev[counter]
            t[index + 1] = copyRev[(copy.length - 1) - counter]
            counter++
            index+=2
        }
    }
    return t
  }
  
  arrange([1,2])