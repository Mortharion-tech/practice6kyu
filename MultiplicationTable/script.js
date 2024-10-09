/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]] */

multiplicationTable = function(size) {
    const tabArr = [];
    for (let i=1; i<=size; i++) {
      let row = [];
      for (let j = 1; j <= size; j++) {
        row.push(i*j);
      }
      tabArr.push(row);
    }
    return tabArr;
}

/* multiplicationTable = function(n) {
    return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)));
} */

/* 
const multiplicationTable=s=>Array(s).fill().map((a,i)=>Array(s).fill().map((e,j)=>(1+i)*(1+j)));
 */