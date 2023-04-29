function createSecretHolder(secret) {
        return {
                getSecret: () => secret,
                setSecret: (s) => secret = s
        };
}