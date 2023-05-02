function prefill(n, v) {
    try {
      var arr = Array.apply(null, Array(typeof n=='boolean'? parseInt(n): +n));
      return arr.map(function() {
        return v;
      });
    } catch (e) {
      throw new TypeError(n+' is invalid');
    }
  }