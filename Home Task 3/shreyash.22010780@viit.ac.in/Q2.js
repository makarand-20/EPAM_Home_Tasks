function add(n) {
  var f = function (x) {
    return add(n + x);
  };
  
  f.valueOf = function () {
    return n;
  };
  
  return f;
}