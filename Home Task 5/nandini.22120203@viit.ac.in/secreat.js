function Secret(val) {
    return {
      getSecret: function() {
        return val;
      },
      setSecret: function(newVal) {
        val = newVal;
        return val;
      }
    }
  }
  
  
  console.log(Secret(5).getSecret());
  console.log(Secret(5).setSecret(10));