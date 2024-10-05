/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
    let obj = {};
    if (string.length===0) {return obj};
    string.split('').forEach((char)=> {
      if (!obj[char]) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    });
    return obj;
}

/* function count(string) {
    let obj = {};
    string.split('').forEach((char)=> {obj[char] ? obj[char] += 1 : obj[char] = 1;});
    return obj;
} */