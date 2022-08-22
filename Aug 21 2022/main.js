/* 
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2){
    return ((flower1 + flower2) % 2 == 1)
  }

  // Theory behind this is => 2 evens will make an even and 2 odds will make an even so as long as the sum is odd it is true

  /*
  I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

function generateShape(integer){
    let string = '';
    let newStr = []
    for(let i = 0; i < integer; i++) {
        string +='+'
    }
    for(let j = 0; j < integer; j++) {
        if(j == integer - 1) {
            newStr[j] = string
            break
        }
        newStr[j] = string + '\n'
    }
    return newStr.join('')
}

/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(year) {
    if(year.charAt(1) == '0' && year.charAt(2) == '0' && year.charAt(3) == '0') {
        return year.charAt(0) + year.charAt(1) + 'th'
    }
    
    let suffix = {
        '0': 'th','1': 'st', '2': 'nd', '3': 'rd', '4': 'th', '5': 'th', '6': 'th', '7': 'th', '8': 'th', '9': 'th',
    }
    let century = (Number(year.charAt(0) + year.charAt(1)) + 1).toString()
    return (Number(century) < 20) ? century + 'th' : century + suffix[century.charAt(1)]
}
