/* Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
    return str.length === 0 ? str : str.split(/[-_]/).map((val, ind) => {
      if (ind > 0) {
        return val.charAt(0).toUpperCase() + val.slice(1);
      } else {
        return val;
      }
    }).join('');
}