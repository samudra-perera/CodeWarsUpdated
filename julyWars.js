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

/* 
Task
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives and negatives also zeros_

Repetition of numbers in the array/list could occur.

The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .

Note : Regardless the sign of negativity .

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .

Note : Regardless the sign of negativity .

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .

Note : Regardless the sign of negativity .
*/

function maxGap (numbers){
  numbers.sort((a,b) => a-b);
  maxValue = [];
  for(i = 0; i < numbers.length - 1; i++) {
    maxValue[i] = Math.abs(numbers[i] - numbers[i + 1])
  }
  return maxValue.sort((a,b) => a-b)[maxValue.length - 1]
}

/*
Task
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Notes
Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

Input >> Output Examples
nthSmallest({3,1,2} ,2) ==> return (2) 
Explanation:
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
Explanation:
Since the passed number is 3 , Then * the third smallest element in this array/list is 7*

nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2) 
Explanation:
Since the passed number is 4 , Then * the fourth smallest element in this array/list is 2*

nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 
Explanation:
Since the passed number is 5 , Then * the fifth smallest element in this array/list is 92*
*/


function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b)[pos - 1]
}

/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

function maxTriSum(numbers) {
  let unique = [...new Set(numbers)]
  return unique.sort((a,b) => a - b).splice(unique.length - 3, 3).reduce((acc,cur) => acc + cur, 0) 
}

/* 
Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .

Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .

Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .

Now we add the next smallest number (14 + 9) , so the sum becomes 23 .

Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .

Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .

We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
*/

function minimumSteps(numbers, value){
  let sorted = numbers.sort((a,b) => a - b)
  let counter = 0;
  let currentSum = sorted[0]; // initial value

  for(let i = 1; i <= sorted.length; i++) {
    if(currentSum >= value) {
      break
    }
      currentSum = currentSum + sorted[i]
      counter++
    }
    return counter
}


/* 
Task
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

*/

function minValue(values){
  return Number([... new Set(values)].sort((a,b) => a - b).map(elem => elem.toString()).join(''))
}

/* 
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/ 

function rowWeights(array){
  let evenIndex = array.filter((elem, index) => index % 2 == 0).reduce((acc,cur) => acc + cur, 0)
  let oddIndex = array.filter((elem, index) => index % 2 == 1).reduce((acc,cur) => acc + cur, 0)
  
  return [evenIndex, oddIndex]
}

rowWeights([29,83,67,53,19,28,96])

/*
6Kyu
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(string){
  return string.split(' ').map(elem => {
    if(elem.length >= 5){
      return elem.split('').reverse().join('')
    } else {
      return elem
    }
  }).join(' ')
}


spinWords("Hey fellow warriors")

//Refactor Code 
function spinWords(string) {
  return string.split(' ').map(elem => (elem.length >= 5) ? elem.split('').reverse().join('') : elem).join(' ')
}

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
  let unique = {};

  // Creates a unique set of numbers with the key being the number and obj[key] being the # of instances
  for (let nums of A) {
    unique[nums] = unique[nums] ? unique[nums] + 1 : 1;
  }

  // Iterates object to find number with odd instances and returns the key
  let sortable = [];
  for(let key in unique) {
    if(unique[key] % 2 == 1) {
      return Number(key)
    }
  }
}

//findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
findOdd([1,1,1,1,1,1,10,1,1,1,1])

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem))

  }


arrayDiff([3,2,2,4,5,6], [3,2])

/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

function likes(name) {
  let len = name.length;
  if(len == 0) {
    return 'no one likes this'
  } else if (len == 1 ) {
    return `${name[0]} likes this`
  } else if (len == 2) {
    return `${name[0]} and ${name[1]} like this`
  } else if (len == 3) {
    return `${name[0]}, ${name[1]} and ${name[2]} like this`
  } else {
    return `${name[0]}, ${name[1]} and ${len - 2} others like this`
  }
}



/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/



var countBits = function(n) {
  return [...n.toString(2)].reduce((acc,cur) => Number(acc) + Number(cur), 0)
};

countBits(1234)

/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
*/

function multiply(a, b) {
  let result = Number(a) * Number(b)
  return BigInt(result.toString())
}

multiply("9007199254740991", "9007199254740991")

/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  let newArray = str.split(' ').map((elem) => elem.split(''))
  for(let i = 0; i < newArray.length; i++) {
    if(newArray[i] == '!' || newArray[i] == '?') {
      break
    }
    newArray[i].push(newArray[i].shift())
    newArray[i].push('a', 'y')
  }
  return newArray.map(elem => elem.join('')).join(' ')
}

pigIt('Pig latin is cool')

/* A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

Ex n = 10

Twin Primes are (3,5) (5,7) so your function should return 2!
*/

function twinPrime(n) {
  let prime = [];
  let sieve = [];
  for(let i = 2; i <= n; i++) {
    if(!sieve[i]) {
      prime.push(i)
    }
    for(j = i; j <= n; j += i) {
      sieve[j] = true;
      console.log(j)
    }
  }
  return prime
}

twinPrime(100)

function twinPrime(n) {
  if(n < 8 && n >= 4) {
    return 1
  } else if (n < 4) {
    return 0
  }

  let array = [...Array(n+2).keys()];
  let upperLimit = Math.sqrt(n+3);
  let twin = [];


  // returns an array of primes equal to numbers and non=primes equal to false
  for(let i = 2; i <= upperLimit; i++) {
    if(array[i]) {
      for(let j = i * i; j < n+3; j += i) {
        array[j] = false;
      }
    }
  }
  
  // Checks if number is a twin prime
  for(let i = 3; i <= n-1; i++) {
    if(typeof(array[i]) == 'number' && typeof(array[i+2]) == 'number') {
      twin.push([array[i], array[i+2]])
    } else {
      continue
    }
  }
  return twin.length
}

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(n){
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${9}`

}

function createPhoneNumber(n) {
  let newArr = n.map(elem => elem.toString())
  newArr.splice(0,0, '(')
  newArr.splice(4,0, ')')
  newArr.splice(5,0,' ')
  newArr.splice(9,0, '-')
  return newArr.join('')
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// Better solution
function createPhoneNumber(n) {
  let format = '(xxx) xxx-xxxx'
  for(let i = 0; i < n.length; i++) {
    format = format.replace('x', n[i])
  }
  return format
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem))
}

/* 
b.includes(elem) returns a true of false value and the bang operator inverses to not include those values
*/

  arrayDiff([1,2,3], [1,2])

/* 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  let objSet = {};
  //Case desensitive
  let textLower = text.toLowerCase()
  // Creates an object from the above variable in the form {character: count}
  for( let i = 0; i<text.length; i++) {
    let char = textLower.charAt(i)
    if( objSet[char]) {
      objSet[char]++;
    } else {
      objSet[char] = 1
    }
  }
  
  //Object.values returns only the count into an array then it is filter for only those repeating (count greater than 1)
  return Object.values(objSet).filter(elem => elem > 1).length
}

/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers){
  let even = [];
  let odd = [];

  for(let i = 0; i < integers.length; i++) {
    if(integers[i] % 2 == 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
  }

  return even.length == 1 ? even[0] : odd[0];

}

/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
  let newArr = word.toLowerCase()
  let objChar = {};

  //Create a set of all the letters and the amount of times they appear in the string
  for (let i = 0; i < newArr.length; i++) {
    let char = newArr.charAt(i)
    if(objChar[char]) {
      objChar[char]++
    } else {
      objChar[char] = 1;
    }
  }
  
  // turn string into an array then map the the comparison of the # of appearances to the correct parantheses using a conditional
  return newArr.split('').map(elem => {
    if(objChar[elem] > 1) {
      return elem = ')'
    } else {
      return elem ='('
    }
  }).join('')
}

duplicateEncode("recede")

/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
  let clock = [`00`, `00`, `00`]
  let hours = seconds/3600
  let minutes = (hours - Math.floor(hours))*60
  let sec = Math.round((minutes - Math.floor(minutes))*60)

  if(hours < 10) {
    clock[0] = `0${Math.floor(hours)}:`
  } else {
    clock[0] = `${Math.floor(hours)}:`
  }

  if(minutes < 10) {
    clock[1] = `0${Math.floor(minutes)}:`
  } else {
    clock[1] = `${Math.floor(minutes)}:`
  }

  if(sec < 10) {
    clock[2] = `0${(sec)}`
  } else {
    clock[2] = `${(sec)}`
  }

  return clock.join('')
}

humanReadable(207670)

// Refactored with for loop to deal with the if else statements

function humanReadable (seconds) {
  let clock = ['00','00','00']
  let hours = seconds/3600
  let minutes = (hours - Math.floor(hours))*60
  let sec = Math.round((minutes - Math.floor(minutes))*60)
  let time = [Math.floor(hours), Math.floor(minutes), sec]

  for(let i = 0; i < clock.length; i++) {
    if(time[i] < 10) {
      clock[i] = `0${time[i]}`
    } else {
      clock[i] = `${time[i]}`
    }
  }

  return `${clock[0]}:${clock[1]}:${clock[2]}`
}

humanReadable(207670)

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/







function alphabetPosition(text) {
  //Object dictionary with corresponding values
  let alpha = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
    'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
  }

  //Turn string into lowercase then removing spaces and turning into array once more then mapping char to obj and filteing undefined elements out
  return text.toLowerCase().split(' ').join('').split('').map(elem => {
    if(alpha[elem]) {
      return alpha[elem]
    }
  }).filter(elem => typeof(elem) == 'number').join(' ')
}

alphabetPosition("The sunset sets at twelve o' clock.")

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
  // assigning values to directions
  let direction = {
    'n': 1,
    's': -1,
    'w': 1,
    'e': -1
  }

  //cumulation of the position of vertical and horizontal
  let [vert, horz] = [0,0]

  //For loop iterating through the array and matching the direction with the obj value and adding to total pos array
  for(let i = 0; i < walk.length; i++) {
    if(walk[i] == 'n' || walk[i] == 's') {
      vert+=direction[walk[i]]
    } else if (walk[i] == 'w' || walk[i] == 'e') {
      horz+=direction[walk[i]]
    }
  }
  
  return (vert == 0 && horz == 0 && walk.length == 10)
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// Can't use map from the second index unless the array is sliced from the initial map point
function toCamelCase(str){

  let toCamel

  if(str.split('-').length == 1) {
    toCamel = str.split('_')
  } else {
    toCamel = str.split('-')
  }

  return toCamel.slice(1).map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1)).shift(toCamel[0])
}

toCamelCase("The-Stealth-Warrior")
toCamelCase("the_stealth_warrior")


//Done using a for loop
function toCamelCase(str){

  let toCamel

  if(str.split('-').length == 1) {
    toCamel = str.split('_')
  } else {
    toCamel = str.split('-')
  }

  //to deal with the edge case where the string starts with a underscore or dash
  toCamel = toCamel.filter(elem => elem.length > 0)

  for(let i = 1; i < toCamel.length; i++) {
    toCamel[i] = toCamel[i].charAt(0).toUpperCase() + toCamel[i].slice(1)
  }

  return toCamel.join('')
}

toCamelCase("The-Stealth-Warrior")
toCamelCase("the_stealth_warrior")
toCamelCase('---to-my-oooooold-----friend')

/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/


function moveZeros(arr) {
  let countZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) == 'number' && arr[i] == 0) {
      countZero++
    }
  }

  let newArr = arr.filter(elem => (typeof(elem) == 'string' || elem != 0 || typeof(elem) == 'boolean' || typeof(elem) == 'object'))


  return newArr.concat(Array(countZero).fill(0))
}


//Refactored version
function moveZeros(arr) {
  let zeroArr = arr.filter(elem => elem === 0)
  let newArr = arr.filter(elem => elem !== 0)


  return newArr.concat(zeroArr)
}

moveZeros([ '4', '0', 5, [], null, 1, {}, {}, {}, '1', '2', 9 ])

/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
*/

// Approach to keep checking array until conditions are not met ==> i=-1
function dirReduc(arr) {
  let directions = {
    "NORTH":1,
    "SOUTH":-1,
    "EAST":2,
    "WEST":-2
  };

  for(let i = 0; i<arr.length-1; i++) {
    if(directions[arr[i]]+directions[arr[i+1]] != 0) {
      continue;
    } else {
      arr.splice(i,2); // removes the opposing directions from the array
      i=-1; // This statement ensures that the loop will start from the beginning everytime i = -1 + 1 = 0
    }

  }
  return arr;
}

dirReduc(["EAST","WEST"])

/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function(iterable){
  //Turns input of string or array into arrays
  iterable = [...iterable]
  // to Store unique inputs from array
  let uniqArr = [];

  //iterate through the array to look for unique inputs and keep order
  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i+1]) {
      uniqArr.push(iterable[i])
    } 
  }
  return uniqArr
}