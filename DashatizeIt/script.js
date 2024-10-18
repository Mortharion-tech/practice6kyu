/* Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5' */

function dashatize(num) {
    const digArr = Math.abs(num).toString().split('');
    return digArr.map((dig, ind, arr) => {
      if (Number(dig)%2!==0) {
        if (ind === 0) {
          return dig + '-';
        }
        if (ind === arr.length-1) {
          return '-' + dig;
        }
        return '-' + dig + '-';
      }
      return dig;
    }).join('').replace(/^-|-$/g, '').replace(/--+/g, '-');
}

/* function dashatize(num) {
    return String(num).replace(/([13579])/g, "-$1-").replace(/--+/g, "-").replace(/(^-|-$)/g, "");
} */