/* You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

*/

function longestConsec(strarr, k) {
    // Edge case where the numbers of strings to be concat is greater than the number of elems in the array 
    if(k > strarr.length) {
        return ""
    }

    //To store the strings and the length of the strings
    let concat = [];
    let lens = [];
    for(let i = 0; i <= strarr.length - k; i++) {
        // Since we are concat strings, we need to initialize the concat[i] as a string prior to the addtiona
        concat[i] = ''
        for(let j = 0; j < k; j++) {
            concat[i] += strarr[i+j]
        }
        // After the strings are concat add the length to the lens array 
        lens[i] = concat[i].length
    }

    //Returns the first instance of the largest length
    return concat[lens.indexOf(Math.max(...lens))]
}

longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)

