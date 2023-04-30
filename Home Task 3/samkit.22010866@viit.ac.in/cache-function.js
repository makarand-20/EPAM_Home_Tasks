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