function calculateRentalCost(days) {
    if (days >= 7) {
      totalCost -= 50; 
    } else if (days >= 3) {
      totalCost -= 20; 
    }
    return totalCost;
  }
  
  
  console.log(calculateRentalCost(2)); 
  console.log(calculateRentalCost(3)); 
  console.log(calculateRentalCost(7)); 