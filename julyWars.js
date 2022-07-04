// 8 Kyu -- Warmups

/* Implement a function which multiplies two numbers.*/

function multiply(a,b) {
    return a*b
}

/* Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ). */

function powersOfTwo(n){
    let power = [];
    for(let i = 0; i<=n; i++) {
        power[i] = 2 ** i;
    }
    return power
}

// Suzuki Monk problem
/* The situtation is an array with in array 
let var = [[], [], [], []] ... the solution is the sum of all arrays including nested arrays
so... reduce the inside and reduce again
*/

function stairsIn20(s){
    let length = s.length;
    let temp = []
    for (let i = 0; i<length; i++) {
        temp[i] = s[i].reduce((acc, current) => acc + current, 0)
    }
    let final = temp.reduce((acc, current) => acc + current, 0)
    return final*20
  }


// Check if string is uppercase or not 
/* 
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

String.prototype.isUpperCase = function() {
    
  }



// Next Expressions Kata

function expressionMatter(a, b, c) {
    let expressions = [(a + b) * c , a + (b * c), a * b * c, a * (b + c), a + b + c].sort((a,b) => a - b);
    return expressions.pop()

  }

expressionMatter(1,2,3)

//Return the closest 10 value
function closestMultiple10(num) {
  let search = num.toString().split('').pop()

  if (Number(search) >= 5) {
    return Math.ceil(num/10)*10
  } else {
    return Math.floor(num/10)*10
  } 
}

// Code works here but the test cases are not working randomly

/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] */

function openOrSenior(data){
  let output = [];
  let len = data.length;

  for(let i = 0; i < len; i++) {
    console.log(data[i])
    if(data[i][0] > 54 && data[i][1] > 7) {
      output[i] = "Senior"
    } else {
      output[i] = "Open"
    }
  }
  return output
}

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
openOrSenior(input)