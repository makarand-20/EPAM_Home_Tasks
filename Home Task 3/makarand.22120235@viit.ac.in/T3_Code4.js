// http://www.codewars.com/kata/function-composition



function compose(f,g) {
    return function(){return f.call(this,g.apply(this,arguments));};
}