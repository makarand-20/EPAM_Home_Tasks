function rentalCarCost(d) {
  // Your solution here
  var amount=d*40;
  if(d>=7)
    {
      amount=amount-50;
    } else
  if(d>=3)
    {
      amount=amount-20;
    }
  return amount;
}
