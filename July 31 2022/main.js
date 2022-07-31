/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
    return (number % 2 == 0) ? 'Even' : "Odd"
}

/* 
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    return number * -1
  }

  /*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
  */

  function numberToString(num) {
    return num.toString()
  }

  