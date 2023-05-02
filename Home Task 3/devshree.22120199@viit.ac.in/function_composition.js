function compose(f, g) {
  return function() {
    return f(g.apply(this, arguments));
  };
}