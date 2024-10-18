/* Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references.
You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase */

function playPass(s, n) {
    return s.split('').map((char,ind)=> {
      if (char.match(/[A-Z]/g)) {
        const code = char.charCodeAt(0)+n;
        if (code <= 90) {
          char = String.fromCharCode(code);
        } else {
          const offset = code - 90;
          char = String.fromCharCode(64+offset);
        }
      }
      if (char.match(/\d/g)) {
        char = (9 - char).toString();
      }
      if (char.match(/[A-Z]/g) && ind%2!==0) {
        char = char.toLowerCase();
      }
      return char;
    }).reverse().join('');
}