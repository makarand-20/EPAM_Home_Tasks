function always(n) {
    return function() {
      return n;
    }
  }
  const three = always(3);
  console.log(three()); // Output: 3
  