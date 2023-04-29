// https://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
    return {
      getSecret: function() 
      { return secret; 
    },
      setSecret: function(v) 
      { secret = v; 
    }
    };
  }