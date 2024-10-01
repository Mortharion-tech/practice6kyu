/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {
    const arr2 = [...arr];
    const max = arr.sort((a,b)=>b-a);
    const min = arr2.sort((a,b)=>a-b);
    return max[0] === max[1] ? min[0] : max[0];
}

/* Best performance
function findUniq(arr) {
    let a = arr[0], b = arr[1], c = arr[2];
    if (a !== b && a !== c) return a;
    if (b !== a && b !== c) return b;
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== a) return arr[i];
    }
} */