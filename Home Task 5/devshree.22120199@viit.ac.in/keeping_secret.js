function createSecretHolder(secret) 
{
   return 
   {
		getSecret: function() { return secret; },
		setSecret: function(v) { secret = v; }
   };
}