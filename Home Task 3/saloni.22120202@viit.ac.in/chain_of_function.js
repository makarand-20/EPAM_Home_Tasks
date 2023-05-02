function addition(n) {
    let sum = n;
    
    function addNew(x) {
      sum += x;
      return addNew;
    }
    
    addNew.toString = function() {
      return sum;
    };
    
    return addNew;
}