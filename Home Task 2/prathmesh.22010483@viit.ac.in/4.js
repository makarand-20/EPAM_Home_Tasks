function bCost(days, rate) {
    return days * rate;
  }
  
  function dRate(days) {
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
  
  function rCCost(days) {
    return bCost(days, 40) - dRate(days);
  }