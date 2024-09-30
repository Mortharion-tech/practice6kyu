/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str) {
    let pairs = str.split('').reduce((acc, char, index) => {
     if (index % 2 === 0) {
       acc.push(char);
     } else {
       acc[acc.length - 1] += char;
     }
     return acc;
   }, []);
   if (pairs.length > 0 && pairs[pairs.length - 1].length === 1) {
     pairs[pairs.length - 1] += '_';
   }
   return pairs;
}

/* function solution(s) {
    return (s+"_").match(/.{2}/g)||[]
} */