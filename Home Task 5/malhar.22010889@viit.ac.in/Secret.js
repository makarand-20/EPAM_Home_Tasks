function createSecretHolder(secret) {
    var _secret = secret;

    return {
        getSecret: function() {
            return _secret;
        },

        setSecret: function(secret) {
            _secret = secret;
        }
    }
}