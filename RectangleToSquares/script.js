/* The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

9=3^2 + 4=2^2 + 1 + 1

Can you translate this drawing into an algorithm?

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

Examples in general form:
(depending on the language)

  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
  
  You can see examples for your language in **"SAMPLE TESTS".**
Notes:
lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth.

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so,
in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.
*/

function sqInRect(lng, wdth) {
    if (lng === wdth) {return null};
    let squares = [];
    while (lng > 0 && wdth > 0) {
      if (lng < wdth) {
        [lng, wdth] = [wdth, lng];
      }
      squares.push(wdth);
      lng -= wdth;
    }
    return squares;
}

/* function sqInRect(a, b, initial = true) {
    if (a === b) { return initial ? null : [a] }  
    const min = Math.min(a, b)
    const max = Math.max(a, b)
      
    return [min, ...sqInRect(max - min, min, false)]
} */