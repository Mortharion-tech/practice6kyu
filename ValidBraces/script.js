/* Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False */

function validBraces(string) {
    const braces = [];
    const brackets = [];
    const curly = [];
    const stack = [];
    for (let char of string) {
      switch (char) {
        case '(':
          braces.push('(');
          stack.push('(');
          break;
        case ')':
          if (braces.length===0 || stack.pop() !== '(') {return false};
          braces.pop();
          break;
        case '[':
          brackets.push('[');
          stack.push('[');
          break;
        case ']':
          if (brackets.length===0 || stack.pop() !== '[') {return false};
          brackets.pop();
          break;
        case '{':
          curly.push('{');
          stack.push('{');
          break;
        case '}':
          if (curly.length===0 || stack.pop() !== '{') {return false};
          curly.pop();
          break;
      }
    }
    return braces.length===0 && brackets.length===0 && curly.length===0;
}

/* function validBraces(braces) {
    const stack = [];
    const braceMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let brace of braces) {
        if (braceMap[brace]) {
            stack.push(braceMap[brace]);
        } else {
            if (brace !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
} */