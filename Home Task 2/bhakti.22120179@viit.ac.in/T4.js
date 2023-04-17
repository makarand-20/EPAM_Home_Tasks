function rentalCarCost(d) 
{ 
  var Cost = d * 40 ;
  
  if(d>=7)
    Cost -= 50 ;
  else if(d>=3)
    Cost -= 20 ;
  
  return Cost ;
}