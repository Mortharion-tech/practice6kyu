/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go' */

function decipherThis(str) {
    const charArr = str.split(' ').map((word)=> {
      const noDigits = word.replace(/\d/g, '');
      const onlyDigits = word.replace(/\D/g, '');
      if (noDigits.length > 1) {
        return String.fromCharCode(onlyDigits) + noDigits.slice(-1) + noDigits.slice(1,-1) + noDigits[0];
      } else {
        return String.fromCharCode(onlyDigits) + noDigits.slice(-1) + noDigits.slice(1,-1);
      }
    });
    return charArr.join(' ');
}

/*
const decipherThis = str => str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);
*/