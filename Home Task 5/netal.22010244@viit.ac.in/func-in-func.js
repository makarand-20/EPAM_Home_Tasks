/**A function within a function 
Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.
three = always(3)
three() 
returns 3 */

var three;
function always(n = 0) 
{
  return () => 
  {
    return n;
  };
}
three = always(3);
console.log(three());