// http://www.codewars.com/kata/a-chain-adding-function


function add(n) {
    function addNext(num) {
      return add(n + num);
    }
    addNext.valueOf = function() {
      return n;
    }
    return addNext;
  }
  