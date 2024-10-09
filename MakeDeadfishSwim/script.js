/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ] */

function parse( data ) {
    const fishArr = [];
    let val = 0;
    for (const char in data) {
      switch (data[char]) {
          case 'i':
          val += 1;
          break;
          case 'd':
          val -= 1;
          break;
          case 's':
          val = val**2;
          break;
          case 'o':
          fishArr.push(val);
          break;
          default:
          break;
      }
    }
    return fishArr;
}

/* function parse(data) {
    let res = [];
    data.split('').reduce((cur, s) => {
      if (s === 'i') cur++;
      if (s === 'd') cur--;
      if (s === 's') cur = cur**2;
      if (s === 'o') res.push(cur);
      return cur;
    }, 0);
    return res;
} */