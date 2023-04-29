function Secret(val) {
    return {
      getSecret: function() {
        return val;
      },
      setSecret: function(newVal) {
        val = newVal;
      }
    }
  }