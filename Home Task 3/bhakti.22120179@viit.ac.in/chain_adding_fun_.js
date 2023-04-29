
function add(n){
  var fn = function(x){ return add(n+x); }
  fn.toString = function(){ return n; }
  return fn;
}

