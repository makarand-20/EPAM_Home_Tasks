
Transportation on vacation :

function rentalCarCost(d) {
  // Your solution here
  cost = d * 40;
  if(d >= 7){
    return cost - 50;
  }
  else if(d>=3){
    return cost - 20;
  }
  else
    return cost;
}



