/* Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
*/

function leastLarger(a,i) {
    let num = a[i]
    let arrSorted = a.map(elem => elem).sort((a,b) => a-b)
    
    for(let j = 0; j < a.length; j++) {
        if(num < arrSorted[j]) {
            return a.indexOf(arrSorted[j])
        }
    }

    return -1
  }

  /*
  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    return url.split('#')[0]
  }

  