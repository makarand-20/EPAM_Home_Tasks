function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
      callbacks.push(makeCallback(i));
    }

    return callbacks;

    function makeCallback(index) {
        return function() {
          return index;
        };
    }
}