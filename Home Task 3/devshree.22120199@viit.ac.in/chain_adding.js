function add(n){
    // Let the currying begin!
    const sum = n;
    
    function innerAdd(nextNum) {
      return add(sum + nextNum);
    }
    
    innerAdd.valueOf = function() {
      return sum;
    };
    
    return innerAdd;
  }
