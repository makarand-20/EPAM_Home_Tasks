// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// -- 1) getSecret() which returns the secret
// -- 2) setSecret() which sets the secret

function createSecretHolder(secret) 
{
   return 
   {
		getSecret = () => { return secret; },
		setSecret = (v) => { secret = v; }
   };
}