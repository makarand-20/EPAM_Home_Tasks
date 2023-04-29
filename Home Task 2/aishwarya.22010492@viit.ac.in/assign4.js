function rentalCarCost(d) {
  // Your solution here
  let cost = 40;
  let total = cost * d;
  if(d >= 7){
    return total-=50;
  }
  else if(d >= 3 && d < 7){
    return total-=20;
  }
  else {
    return total;
  }
}