// http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
    return {
      getSecret: () => secret,
      setSecret: (s) => secret = s
    };
  }