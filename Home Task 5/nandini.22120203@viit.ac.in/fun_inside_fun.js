function parent(n) {
    
    function child (n) {
       // console.log(n)
     return n;
   }
   return child(n)
  }
  console.log(parent(5))