function compose(f, g) {
    return function(...args) {
      return f(g(...args));
    };
  }
//   function square(x) {
//   return x * x;
// }

// function double(x) {
//   return x * 2;
// }

// const composed = compose(square, double);
// console.log(composed(5)); //100