// http://www.codewars.com/kata/function-composition-1


function compose(...args) {
    return function(n) {
        args.reverse().forEach((i) => n=i(n));
        return n;
    }
}