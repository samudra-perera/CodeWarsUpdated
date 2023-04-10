/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.filter(elem => {
        //Filter all elements that have the correct eyes
        if(elem.charAt(0) == ':' || elem.charAt(0) == ';') {
            return elem
        }
    }).filter(elem => {
        //If elem length is 3 then check if the element has the correct nose
        if(elem.length == 3) {
            if(elem.charAt(1) == '-' || elem.charAt(1) == '~') {
                return elem
            }
        } else if (elem.length == 2) { // To ensure that elements of length 3 with the wrong nose do not get filters 
            return elem
        }
    }).filter(elem => { // To check if the correct smile
        if(elem.charAt(elem.length - 1) == ')' || elem.charAt(elem.length - 1) == 'D') {
            console.log(elem.charAt(elem.length - 1))
            return elem
        }
    }).length // Finally return the length of the remaining elements
}

/*

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/

function isSolved(board) {
    //Destructure the tictactoe board into a more readable 3 x 3 matrix
    let [r11, r12, r13] = [board[0][0], board[0][1], board[0][2]]
    let [r21, r22, r23] = [board[1][0], board[1][1], board[1][2]]
    let [r31, r32, r33] = [board[2][0], board[2][1], board[2][2]]

    // Check 3 rows, 3 verticals, and 2 diagnols
    if((r11 == r12 && r12 == r13) && (r11 && r12 && r13) > 0) {
        return r11
    } else if((r21 == r22 && r22 == r23) && (r21 && r22  && r23) > 0) {
        return r21
    } else if((r31 == r32 && r32 == r33) && (r31 && r32  && r33) > 0) {
        return r31
    } else if(r11 == r21 && r21 == r31 && (r11 && r21 && r31) > 0) {
        return r11
    } else if(r12 == r22 && r22 == r32 && (r12 && r22 && r32) > 0) {
        return r12
    } else if(r13 == r23 && r23 == r33 && (r13 && r23 && r33) > 0) {
        return r13
    } else if(r11 == r22 && r22 == r33 && (r11 && r22 && r33) > 0) {
        return r11
    } else if(r13 == r22 && r22 == r31 && (r13 && r22 && r31) > 0) {
        return r13
    }


    // Check if board is complete after ensuring that no win condtion is satisfied
    for(let i = 0; i < board.length; i++) {
        if(board[i][0] == 0 || board[i][1] == 0 || board[i][2] == 0) {
            return -1
        }
    }
    // If board is full and there is no winner this is the remaining solution
    return 0
}

/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

/* Old answer ... works for 113 test failed 6 test 

function validParentheses(parens) {
  let parenVals = {
    '(': 1,
    ')': -1,
  }

  return parens.split('').map(elem => elem = parenVals[elem]).reduce((c,a) => c + a, 0) == 0
}
*/


function validParentheses(parens) {
    let total = 0;
    parens = parens.split('')
    for(let i = 0; i < parens.length; i++) {
        if(parens[i] == '(') total++
        if(parens[i] == ')') total--
        // Total can never be below zero is starting with a '(' type bracket...therefore if total -- -1 that means one bracket is not closing
        if(total < 0) return false
    }
    return total == 0
}

