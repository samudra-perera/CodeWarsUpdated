
function compareArr(a1, a2) {
    for(let i = 0; i < a1.length; i++) {
        if(a2.includes(a1[i])) {
            return true
        }
    }
    return false
}
//O (n) time complexity
compareArr(['a', 'b', 'c', 'd'], ['e', 'f', 'd'])

//Reverse a string 

let str = 'Hi my name is samudra'

function reverse(str) {
    // Check input
    if(!str || str.length < 2 || typeof(str) !== 'string') return 'Hmmm that is not good'
    //Solution with the methods
    return str.split('').reverse().join('')
}

//Written in one line 
const strRev = str => str.split('').reverse().join('')
reverse(str)

//Merge sorted Arrays 
function mergerSorted(arr1, arr2) {
    //First added arr2 to arr1
    arr1.push(...arr2)
    //2. Now sort the new single array
    //Return the answer
    
    return arr1.sort((a,b) => a-b) // O(n) time
}

//Edge case 
// 1 Does it work with empty arrays
//2 input handling done via conditoinals

mergerSorted([0,3,4,31],[])