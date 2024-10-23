/* In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

       ( n )
C(n, k) = n! / (k! * (n - k)!)

where n denotes a row of the triangle, and k is a position of a term in the row.


You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger. */

function pascalsTriangle(n) {
    //return a flat array representing the values of Pascal's Triangle to the n-th level
    const triangle = [];
    const rows = [];
    for (let row=0; row<n; row++) {
      rows[row] = [1];
      for (let col=1; col<row; col++) {
        rows[row][col] = rows[row-1][col-1] + rows[row-1][col];
      }
      if (row>0) rows[row].push(1);
      triangle.push(...rows[row]);
    }
    return triangle;
}

/* 
const pascalsTriangle = (n, arr = [], i = 0) => n - i ? (arr[i] = [...(arr[i - 1] || arr).map((val, idx) => val + (arr[i - 1][idx - 1] || 0)), 1], pascalsTriangle(n, arr, ++i)) : [].concat(...arr);
 */