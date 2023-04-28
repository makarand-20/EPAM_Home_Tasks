// http://www.codewars.com/kata/function-cache


function cache(func) {
    var cache = {};
    return function() {
      // Convert the arguments to a string to use as a cache key
      var key = JSON.stringify(arguments);
      
      // If the result is already in the cache, return it
      if (cache[key]) {
        return cache[key];
      } 
      
      // Otherwise, call the function and store the result in the cache
      var result = func.apply(this, arguments);
      cache[key] = result;
      return result;
    };
  }
  