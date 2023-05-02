function createSecretHolder(secret) {
    let private=secret;
  
    return {
      getSecret: function(){ return private;},
      setSecret: function(s){ private=s; return null;}
    }
  }