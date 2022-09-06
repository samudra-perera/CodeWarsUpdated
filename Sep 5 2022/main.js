/* 
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
	let counter = 2
    let startingValue = 1;
    let sum = 0;
    for(let i = 1; i < n; i++) {
        startingValue += counter;
        counter+=2
    }

    for(let j = 0; j < n; j++) {
        sum += startingValue;
        startingValue+=2
    }
    return sum
}

// The math way to do it 
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }
