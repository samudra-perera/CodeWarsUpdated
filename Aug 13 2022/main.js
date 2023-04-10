/* Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]
*/

const sequenceSum = (begin, end, step) => {
    let counter = begin;
    let sum = 0
    while(counter <= end) {
        sum += counter;
        counter += step
    }
    return sum
  };

  /* Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
    // Create Empty Table
    let table = [];
    //For Loop to create the arrays within table
    for(let i = 0; i < size; i++) {
        //Create an empty array within the array of table
        table[i] = [];
        //For loop where the iterator i is the multiple in the multiplication table
        for(let j = 0; j < size; j++) {
            //For the case of the first element within array j 
            if(j == 0) {
                table[i][j] = i + 1
            } else {
                // Every element after the first element is equal to the previous plus the iterator + 1
                table[i][j] = table[i][j-1] + (i + 1)
            }
        }
    }
    return table
  }

  //Works for the case of 0 returns empty array and for the case of 1 returns 1x1 array
  multiplicationTable(1)
  