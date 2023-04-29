function createFunctions(n) {
    var callbacks = [];
    
    for (var i = 0; i < n; i++) {
      callbacks.push((function(index) {
        return function() {
          return index;
        };
      })(i));
    }
    
    return callbacks;
  }
  var callbacks = createFunctions(5);
  console.log(callbacks[0]()); // Output: 0
  console.log(callbacks[3]()); // Output: 3