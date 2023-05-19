function add(n){
    var fn = function(x) {
      return add(n + x);
    };
    
    fn.valueOf = function() {
      return n;
    };
    
    return fn;
  }
  
  function add(n) {
    var next = add.bind(n += this | 0);
    next.valueOf = function() { return n; };
    return next;
  }
  
  function add(n){
    var fn = function(x){ return add(n+x); }
    fn.toString = function(){ return n; }
    return fn;
  }
  
  function add(n){
    function monad(m){return add(n+m)}
    monad.valueOf = function valueOf(){return n};
    return monad;
  }
  
  function add(n) {
    var f = function(x) { return add(n+x); };
    f.valueOf = function() { return n; };
    return f;
  }
  