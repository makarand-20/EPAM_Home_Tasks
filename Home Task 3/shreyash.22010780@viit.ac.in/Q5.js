function compose() {
  var funcs = arguments;
  
  return function (result) {
    for (var i = funcs.length - 1; i >= 0; i--) {
      result = funcs[i](result);
    }
    
    return result;
  };
}
