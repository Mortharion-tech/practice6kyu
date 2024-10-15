/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

function cleanString(s) {
    let outArr = [];
    const inArr = s.split('');
    for (const char of inArr) {
      if (char === '#') {
        outArr.pop();
      } else {
        outArr.push(char);
      }
    }
    return outArr.join('');
}

/* 
cleanString = s => s.includes(`#`) ? cleanString(s.replace(/[^#]?#/, ``)) : s;
 */