/* Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s */

function pyramid(n) {
    const pyrArr = [];
    for (let i=0; i<n; i++) {
      pyrArr.push([1]);
      for (let j=0; j<i; j++) {
        pyrArr[i].push(1);
      }
    }
    return pyrArr;
}

/* function pyramid(n) {
    return Array(n).fill().map((e,i)=>Array(i+1).fill(1));
} */