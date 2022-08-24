/* Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples */

function likeOrDislike(buttons) {
    if(buttons.length == 1) {
        return buttons
    } else if(buttons[[buttons.length - 1]] == buttons[[buttons.length - 2]]) {
        return 'Nothing'
    } else {
        return buttons[buttons.length - 1]
    }
  }
  
  likeOrDislike(['Dislike','Dislike'])

  /* In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

function rpsls(pl1,p12){
    let selec = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    let p1 = 'Player 1 Won!'
    let p2 = 'Player 2 Won!'

    if(pl1 == p12) return 'Draw!'

    if(pl1 == selec[2] && p12 == selec[1] || pl1 == selec[2] && p12 == selec[3]) {
        return p1
    } else if (pl1 == selec[1] && p12 == selec[0] || pl1 == selec[1] && p12 == selec[4]) {
        return p1
    } else if (pl1 == selec[0] && p12 == selec[3] || pl1 == selec[0] && p12 == selec[2]) {
        return p1
    } else if (pl1 == selec[3] && p12 == selec[4] || pl1 == selec[3] && p12 == selec[1]) {
        return p1
    } else if (pl1 == selec[4] && p12 == selec[2] || pl1 == selec[4] && p12 == selec[0]) {
        return p1
    } else {
        return p2
    }
}

rpsls('rock', 'spock')

/* Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

//Done using different logic
function inAscOrder(arr) {
    let counter = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            counter++
        }
    }
    return counter == (arr.length - 1)
}

inAscOrder([1,2,4,7,19])

//Done Simply
function inAscOrder(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        return false; 
      }
    }
    return true;
  }

  /* Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .
*/

function maxMultiple(divisor, bound){
    let n = bound
    while(n > 0) {
        if(n % divisor == 0 && n <= bound && n > 0) {
            return n
        }
        n--
    }
  }

  /* Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
    if(!Array.isArray(arr)) return false
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(Number.isInteger(arr[i])) {
            counter++
        }
    }
    return counter == arr.length
  }