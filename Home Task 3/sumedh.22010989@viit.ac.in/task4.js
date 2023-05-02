// https://www.codewars.com/kata/function-composition

function compose(f, g) {
    return function() {
      return f(g.apply(this, arguments));
    };
  }