function compose(...args) {
    return function(n) {
        args.reverse().forEach((i) => n=i(n));
        return n;
    }
}