// Problem :
//http://www.codewars.com/kata/transportation-on-vacation

 // Solution :
 function rentalCarCost(d) {
  // Your solution here
  if(d>=7)
    {
      return 40*d - 50;
    }
  else if(d>=3)
    {
      return 40*d - 20;
    }
  else
    {
      return 40*d;
    }
  }