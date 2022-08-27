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