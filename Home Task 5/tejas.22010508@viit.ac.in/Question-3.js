// create a function, which returns an array of functions, which return their index in the array

function createFunctions(n) {
    var callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }