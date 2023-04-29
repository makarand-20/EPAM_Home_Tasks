function compose() {
        // Your solution
        var funcs = arguments;
        return function (input) {
                var num = input;
                for (var fid in funcs)
                        num = funcs[funcs.length - fid - 1](num);
                return num;
        }
}