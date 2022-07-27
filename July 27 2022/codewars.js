/* 
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
FUNDAMENTALSMATHEMATICS
*/

function digPow(n, p){
    let total =  n.toString().split('').map(elem => {
        let result = Number(elem)**p
        p+=1
        return result
    }).reduce((acc,curr) => acc + curr, 0)
    
    return (total%n == 0) ? total / n : -1
  }

  digPow(46288, 3)

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/



function solution(str) {
    let length = str.length
    let chunks = [];
    for (let i = 0; i < length; i += 2) {
        //pushes the string sections between (0,2) // Returns strings (0,1)
        chunks.push(str.substring(i, i+2))
    }
    if(length % 2 == 1) {
        len = Math.ceil(length/2);
        chunks[len- 1] = chunks[len - 1] + '_'
    }
    return chunks
}

solution('abc')

/* You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

*/



function findEvenIndex(arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        //start grabs the array from index 0 to i+1 and sums the total
      let start = arr.slice(0, i+1).reduce((a, b) => a + b, 0);
        //end grabs the array from index i to the last index of the array and sums the total
      let end = arr.slice(i).reduce((a, b) => a + b, 0)
      console.log([start,end, i])
      //break if array is balanced
      if (start === end) {
        index = i
        break
      }
    }
    return index
}