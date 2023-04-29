function rentalCarCost(d) {
    //   Name : Pratik Kanhaiya Rathod
    //   PRN : 22010885
      const day_cost = 40;
      let total = day_cost * d;
      
      if (d>=7){
        total -=50;
      }
      else if (d>=3){ 
        total -=20;
      }
      
      return total;
      
}   