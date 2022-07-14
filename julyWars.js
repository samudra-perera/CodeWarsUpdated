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

// Simple match function to determine if a sides a,b, and c can be used to form a triangle
// use triangle inequality theorom

function isTriangle(a,b,c) {
   if(a + b > c && a + c > b && b + c > a) {
    return true
   } else {
    return false
   }
}

/* 
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

function minMax(arr){
  arr.sort((a,b) => a-b)
  return [arr[0], arr[arr.length-1]]
}

/* The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {
  let newArr = numbers.map((x) => x)
  let min = Math.min(...newArr)
  let index = newArr.indexOf(min)
  newArr.splice(index, 1)
  return newArr
}

removeSmallest([1,2,3,4,5])


// Refactored Solution
function removeSmallest(numbers) {
  let newArr = numbers.map((x) => x)
  let remove = newArr.splice(newArr.indexOf(Math.min(...newArr)), 1)
  return newArr
}

removeSmallest([1,2,3,4,5])

/* Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

function dotCalculator (equation) {
  let arr = equation.split(' ')
  let op = [arr[0].length, arr[1], arr[2].length]
  let result
  let final = '.'
  if(arr[1] == '+') {
    result = op[0] + op[2]
  } else if(arr[1] == '-') {
    result = op[0] - op[2]
  } else if (arr[1] == '*') {
    result = op[0] * op[2]
  } else if(arr[1] == '//') [
    result = op[0] / op[2]
  ]

  return final.repeat(result)
}

dotCalculator("..... + ...............")


// 6Kyu Kata 
/* The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

alternative text

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

Examples in general form:
(depending on the language)

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  
  You can see examples for your language in **"SAMPLE TESTS".**
Notes:
lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.

In that case the returned structure of C will have its sz component equal to 0.

Return the string "nil" with Bash, PowerShell, Pascal and Fortran. */

// How to solve?
// 1. Smallest side = largest square in the rectangle. 
// 2. Create new rectangle from the old by subtracting the largest square side and making a sqaure from the smallest avail side
// 3. Push result to array
// 4. Repeat till square are 1

// TRY AGAIN LATER


function guessHatColor(a,b,c,d) {
  if(b == c) {
    return 1
  } else {
    return 2
  }
}



/* 
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

var number = function(busStops){
  let total = 0;
  for (let i = 0; i < busStops.length; i++) {
    total = total + busStops[i][0] - busStops[i][1]
  }
  return total
}

/* 
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

var isSquare = function(n) {
  return Number.isInteger(Math.sqrt(n))
}

/* Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5



Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function sortByValueAndIndex(array) {
  newArr = [];
  for(let i = 0; i < array.length; i++) {
    newArr[i] = [array[i] * (i + 1), i+1]
  }
  return newArr.sort((a,b) => a[0] - b[0]).map(elem => elem[0]/elem[1])
}

sortByValueAndIndex([23,2,3,4,5])

function sortByValueAndIndex(array) {
  return array.map((a,b) => [a*(b+1), b+1]).sort((a,b) => a[0] - b[0]).map(elem => elem[0]/elem[1])
}

sortByValueAndIndex([23,2,3,4,5])

/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

function getSum( a,b ) {
   let [min, max, total] = [Math.min(a,b), Math.max(a,b), 0]

   for (let i = min; i <= max; i++) {
    total = total + i
   }
   return total
}

getSum(-1,2)

/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {
  let result = n.toString().split('').map(elem => Number(elem)).reduce((sum, cur) => sum + cur, 0)
  
  while(result.toString().length > 1) {
    result = result.toString().split('').map(elem => Number(elem)).reduce((sum, cur) => sum + cur, 0)
  }
  
 return result
}

digital_root(942)

/* Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
*/

function strong(n) {
  function factorial(num) { // creating the factorial function
    if(num == 0) {
      return 1
    } else if (num > 0) {
      let fact = 1;
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
      return fact
    }
  }
  result = n.toString().split('').map(elem => factorial((Number(elem)))).reduce((acc, curr) => acc + curr, 0)

  return (result == n) ? "STRONG!!!!" : "Not Strong !!"
}

/*
Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independently of the others and assigned to any student. Knowing there will always be an even number of chores and that the number of students isn't limited, Suzuki needs to assign two chores to each student in a way which minimizes the total duration of the day's work.

For example, with the list of chores [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9], he'll need 6 students whose total workload will be: [7, 8, 8, 10, 10, 11] (as for [5+2, 4+4, 6+2, 8+2, 1+9, 9+2]). In this case, the maximal workload is minimized to 11 (=9+2. Keep in mind two chores must be assigned to each student involved).
*/

function choreAssignment(chores) {
  chores.sort((a,b) => a-b) // sorting from the get go for the addition on both sides
  let counter = chores.length -1 // for incrementing backwards
  let choreArray = []; // Empty array for pushing in values
  for(let i = 0; i <= Math.floor(counter); i++) {
    choreArray[i] = chores[i] + chores[counter]
    counter = counter - 1;
  }
  return choreArray.sort((a,b) => a - b) // sort again for final result
}

choreAssignment([5, 2, 1, 6, 4, 4])

/* Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate the input)

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]
*/

function matrix(array) {
    let len = array.length;
    for(let i = 0; i < len; i++) {
      if(array[i][i] >= 0) {
        array[i][i] = 1
      } else {
        array[i][i] = 0
      }
    }
    return array
}

/* Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10 = 50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/

function adjacentElementsProduct(array) {
  newArr = [];
  for(let i = 0; i < array.length - 1; i++) {
    newArr[i] = array[i]*array[i+1];
  }
  return newArr.sort((a,b) => a-b)[newArr.length - 1]
}

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])


/* Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon! 
*/

function reduce(fraction) {
  let result = [];
  let min = fraction.map(elem => elem).sort((a,b) => a -b)[0]
  for(let i = 0; i <= min; i++) {
    if(fraction[0] % i == 0 && fraction[1] % i == 0) {
      result[0] = fraction[0] / i;
      result[1] = fraction[1] / i
    }
  }
  return result
}

reduce([60,20])

/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/ 

function friend(friends){
  let lenArray = friends.map(elem => elem.split('').length);
  let realFriends = [];
  for(let i = 0; i < lenArray.length; i++) {
    if(lenArray[i] == 4) {
      realFriends.push(friends[i])
    }
  }
  return realFriends
}

// Shortest solutinon on Code Wars

function friend(friends){
  return friends.filter(n => n.length === 4)
}

// Done for Today


/// JS Practice OOP

// TODO: define the Dog class here

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark() {
    if(this.size < 50) {
      return 'Grrr Grrr'
    } else {
      return 'Woof Woof'
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


// OOOP RPG Example
class Character {
  constructor(name, health, strength, gold, key) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.gold = 10;
    this.key = 1;
    this.xp = 0; // XP is always zero for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key(s)`);
        this.xp += bonusXP;
        this.gold = this.gold + target.gold;
        this.key = this.key + target.key;
        target.gold = 0;
        target.key = 0;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());


///OOP Last Example 

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = 0; 
  }

  credit(value) {
    this.balance = this.balance + value;
  }

  describe() {
    console.log(`owner: ${this.name}, balance: ${this.balance}`)
  }
}

const sean = new Account('Sean', 0)
const brad = new Account('Brad', 0)
const george = new Account('George', 0)
sean.credit(1000)
brad.credit(1000)
george.credit(1000)
sean.describe()
brad.describe()
george.describe()

/// July 14 Codewars 
/* Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes
Array/list size is at least 2 .

Array/list's numbers Will be only Positives

Repetition of numbers in the array/list could occur.

Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 12 is the product of all array's elements except the first element

The second element 20 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.

productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10

The second element 600 is the product of all array's elements except the second element 3

The Third element 360 is the product of all array's elements except the third element 5

The Fourth element 300 is the product of all array's elements except the fourth element 6

Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

function productArray(numbers){
  let productArray = [];
  
  for(let i = 0; i < numbers.length; i++) {
    let method = numbers.map(elem => elem)
    method.splice(i,1)
    productArray[i] = method.reduce((acc, cur) => acc * cur, 1)
  }
  return productArray
}
productArray([3,27,4,2])

// Alternative Solution using divison
function productArray(numbers){
  let product = numbers.reduce((acc, cur) => acc * cur, 1);
  return numbers.map(elem => product/elem)
}
productArray([3,27,4,2])

