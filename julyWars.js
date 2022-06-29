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