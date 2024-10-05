/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12)    --> should return "10 + 2"
expandedForm(42)    --> should return "40 + 2"
expandedForm(70304) --> should return "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
    const numString = num.toString();
    const len = numString.length;
    let retString = '';
    for (let i=0; i<len; i++) {
      if (numString[i] != 0) {
        retString += numString[i] + '0'.repeat(len-i-1) + ' + ';
      }
    }
    return retString.slice(0, -3);
}

/* const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + "); */