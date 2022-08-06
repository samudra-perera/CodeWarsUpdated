/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    //Counter to keep track of the number of steps
    let counter = 0;
    while(num.toString().length > 1) {
        //Turn num into an array then reduce then increment counter 
        num = num.toString().split('').reduce((acc, curr) => Number(acc) * Number(curr), 1);
        counter++;
    }
    return counter;
 }

/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    num = num.toString().split('');
    //to store the strings of digits in the addition sequence
    let store = [];
    for(let i = 0; i < num.length; i++) {
        if(num[i] == 0) {
            //if num == 0 don't do anything continue
            continue;
        } else {
            //Any non zero digit push to store and add the number of zeros needed 
            store.push(num[i] + '0'.repeat(num.length - 1 - i));
        }
    }
    
    //For loop to create the addition string
    let str = '';
    for(let j = 0; j < store.length; j++) {
        //if statement to handle the last element 
        if(j == store.length - 1) {
            str+= `${store[j]}`
            break
        }
        str+= `${store[j]} + `
    }
    return str
  }


  /* The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!
*/

function sumDigPow(a, b) {
    //To store the results and temp calcs
    let results = []
    let temp
    for(let i = a; i <=b; i++) {
        temp = i.toString().split('')
        .map((elem, index) =>  Number(elem)**(index + 1))
        .reduce((acc, cur) => acc + cur, 0)
        if(temp == i) {
            results.push(i)
        }
    }
    return results
  }
  
  /* The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing: */

function perimeter(n) {
    let fib = [0,1]
    //Creating the Fib sequence based on the number of iterations needed (n)
    while(n > 0) {
        fib.push(fib[fib.length - 2] + fib[fib.length - 1])
        n--
    }
    return (fib.reduce((acc,cur) => acc + cur, 0)) * 4
}

perimeter(5)