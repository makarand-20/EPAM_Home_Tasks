// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

function cache(func) {
    const cached_results = {};
    return (...args) => {
      const key = JSON.stringify(args);
  
      if (!(key in cached_results)) {
        const result = func.apply(null, args);
        cached_results[key] = result;
      }
  
      return cachedResults[key];
    };
}