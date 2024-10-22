/* For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :) */

function longestRepetition(s) {
    if (s.length ===0) return ["",0];
    
    let highestChar = s[0];
    let highestCount = 1;
    let currentChar = s[0];
    let count = 1;
  
    for (let i = 1; i < s.length; i++) {
      if (s[i] === currentChar) {
        count++;
      } else {
        if (count > highestCount) {
          highestChar = currentChar;
          highestCount = count;
        }
        currentChar = s[i];
        count = 1;
      }
    }
    
    if (count > highestCount) {
      highestChar = currentChar;
      highestCount = count;
    }
  
    return [highestChar, highestCount];
}

/* 
const longestRepetition = s => s.match(/(.)\1*|$/g).reduce(([c, l], val) => val.length > l ? [val[0], val.length] : [c, l], [``, 0]);
 */