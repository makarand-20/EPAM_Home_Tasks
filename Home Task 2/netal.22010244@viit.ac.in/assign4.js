//http://www.codewars.com/kata/transportation-on-vacation

function base_cost(days, rate) {
    return days * rate;
}

//code here
function discount(days) {
    if ( days >= 7 ) {
      return 50;
    }

    else if ( days >= 3 ) {
      return 20;
    }

    else {
      return 0;
    }
}
  
function rentalCarCost(days) {
    return base_cost(days, 40) - discount(days);
}