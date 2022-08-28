//Redoing 7Kyu disemvowel with a friend -- Helping my friend Learn

function disemvowel(str) {
    let vowels = 'aeiouAEIOU'
    return str.split('').filter(elem => !vowels.includes(elem)).join('');
  }

  function disemvowel(str) {
    let vowels = 'aeiouAEIOU';
    return str.split('').filter(function(elem) {
        return !vowels.includes(elem)
    }).join('')
  }

  // Build a square

function generateShape(integer){
    let array = Array(integer).fill('+').join('')
    let str = ''
    for(let i = 0; i < integer; i++) {
        if(i == integer - 1) {
            str += array
            break
        }
        str += array + '\n'
    }
    return str
}

function generateShape(integer) {
    let str =''
    let array = Array(integer).fill(Array(integer).fill('+')).forEach((elem,index) => {
        if(index == integer - 1) return str += elem.join('')
        return str += elem.join('') + '\n'
    })
    return str
}

generateShape(5)