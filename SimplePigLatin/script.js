/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str) {
    const regex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    return str.split(' ').map((val)=> {
      if (regex.test(val)) {
        return val;
      } else {
        return val.slice(1)+val[0]+"ay";
      }
    }).join(' ');
}

/* Most concise
function pigIt(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
} */