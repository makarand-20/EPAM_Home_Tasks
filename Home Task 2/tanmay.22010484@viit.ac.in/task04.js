function rentalCarCost(d) 
{
    let cost=0;
    if(d>=7)
      {
        cost=(d*40)-50;
        return cost;
      }
    else if(d>=3)
      {
        cost=(d*40)-20;
        return cost;
      }
    else
    {
      cost=d*40;
      return cost;
    }
}