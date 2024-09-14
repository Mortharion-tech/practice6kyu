/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text) {
    const charArr = text.toLowerCase().split('');
    const doubArr = [];
    const mapArr = charArr.map((val, ind) => {
      if (charArr.indexOf(val) === ind) {
        return 0;
      } else if (!doubArr.includes(val)) {
        doubArr.push(val);
        return 1;
      } else {
        return 0;
      }
    });
    if (mapArr.length === 0) return 0;
    return mapArr.reduce((a,b)=>a+b);
}