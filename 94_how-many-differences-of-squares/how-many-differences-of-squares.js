/* as the author wrote

I noticed a pattern within the test cases. 
The solution was always near 3/4 of the input. 
The actual solution is 0.75 times the input rounded 
to the nearest integer except when the remainder 
is exactly 0.5, in which case we should round down. 
My solution just uses enough precision to handle 
the latter part without additional conditions.

I think it's beautiful :)
*/
export const squares = (n) => Math.round(n * 0.749999);
