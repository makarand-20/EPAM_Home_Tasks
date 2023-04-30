function cache(func) {
        // do your magic here

        var result = {};
        return function () {
                var args = JSON.stringify(arguments);
                if (!result.hasOwnProperty(args)) result[args] = func.apply(null, arguments);
                return result[args];
        };
}
