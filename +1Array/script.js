/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
[1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
[9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
[0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)
Invalid arrays

[] is invalid because it is empty
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer */

function upArray(arr) {
    if (arr.length === 0 || !arr.every(num => Number.isInteger(num) && num >= 0 && num <= 9)) return null;
    let num = BigInt(arr.join('')) + 1n;
    return num.toString().padStart(arr.length, '0').split('').map(Number);
}

/* 
function upArray(arr){return (arr.length === 0 || !arr.every(num => num >= 0 && num <= 9)) ? null : (BigInt(arr.join(''))+1n).toString().padStart(arr.length, '0').split('').map(Number);}
 */