/* 
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2){
    return ((flower1 + flower2) % 2 == 1)
  }

  // Theory behind this is => 2 evens will make an even and 2 odds will make an even so as long as the sum is odd it is true

  