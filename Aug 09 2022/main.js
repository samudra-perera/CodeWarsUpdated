/* Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

*/

function goodVsEvil(good, evil){
    let goodArr = [1,2,3,3,4,10]
    let badArr = [1,2,2,2,3,5,10]
    good = good.split(' ').map((elem, index) => Number(elem)*goodArr[index]).reduce((acc, curr) => acc + curr, 0)
    evil = evil.split(' ').map((elem, index) => Number(elem)*badArr[index]).reduce((acc, curr) => acc + curr, 0)

    if(good == evil) return "Battle Result: No victor on this battle field";
    return good > evil ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good";
}

/*
Among the ruins of an ancient city a group of archaeologists found a mysterious function with lots of HOLES in it called getNum(n) (or get_num(n) in ruby, python, or r). They tried to call it with some arguments. And finally they got this journal:

getNum(300) #-> returns 2
getNum(90783) #-> returns 4
getNum(123321) #-> returns 0
getNum(89282350306) #-> returns 8
getNum(3479283469) #-> returns 5
The archaeologists were totally stuck with this challenge. They were all in desperation but then.... came YOU the SUPER-AWESOME programmer. Will you be able to understand the mystery of this function and rewrite it?
*/

var getNum = function(n) {
    let count=0
    n.toString().split('').forEach(elem=>{
        if(elem === '0' || elem === '6' || elem === '9') {
            count++
        } else if(elem === '8') {
            count+=2
        } else {
            elem
        }
    })
    return count
};

/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag (str) {
    let hashtag = str.split(' ').map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join('')
    return (('#' + hashtag).length > 140 || hashtag.length == 0) ? false : '#' + hashtag
}

