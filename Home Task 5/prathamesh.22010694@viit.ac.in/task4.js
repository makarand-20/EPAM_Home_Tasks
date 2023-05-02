function createSecretHolder(secret) {
    return {
    getSecret() {
        return secret;
    },
    setSecret(newSecret) {
        secret = newSecret;
    }
    };
}
console.log(createSecretHolder("hello world"))
console.log(createSecretHolder("hell"))
