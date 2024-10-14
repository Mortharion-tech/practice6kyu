/* Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.

More examples in test cases. Good luck! */

function solve(s) {
    const charArr = s.split('').map((word,ind)=> {
      word = word.replace(/[^a-zA-Z]/g, '');
      let sum = 0;
      for (let i=1; i<=word.length; i++) {
        sum += word.charCodeAt(i-1)-96;
      }
      return sum;
    });
    const sumArr = [];
    let conSum = 0;
    for (const val of charArr) {
      if ([1, 5, 9, 15, 21].includes(val)) {
        sumArr.push(conSum);
        conSum = 0;
      } else {
        conSum += val;
      }
    };
    sumArr.push(conSum);
    return Math.max(...sumArr);
}


/* 
const solve = s => Math.max(...s.split(/[aeiou]+/).map(val => [...val].reduce((a, b) => a + b.charCodeAt() - 96, 0)));
 */