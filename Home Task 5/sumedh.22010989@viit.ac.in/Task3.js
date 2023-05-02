// https://www.codewars.com/kata/closures-and-scopes

function createFunctions(n) {
    var callbacks = [];
  
    for (var i=0; i<n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }