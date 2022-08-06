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

  expandedForm(70304)