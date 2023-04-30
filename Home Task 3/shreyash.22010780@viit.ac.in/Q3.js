function cache(func) {
  // do your magic here
  var results = {};
  
  return function(){
    var args = JSON.stringify(arguments);
    
    if(args in results){
      return results[args];
    }
    else {
      var result = fun.apply(null, arguments);
      results[args] = result;
      return result;
    }
  };
}