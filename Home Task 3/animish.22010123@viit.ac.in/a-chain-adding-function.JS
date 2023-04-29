function add(n) {
        // Let the currying begin!
        const func = x => add(n + x)
        func.valueOf = () => n
        return func
}