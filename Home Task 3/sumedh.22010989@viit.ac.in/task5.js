// https://www.codewars.com/kata/function-composition-1

function compose(...args) {
    return function(n){
        var result=n;
        while(args.length!==0)
        {
            result = args.pop()(result);
        }
        return result;
    }
};