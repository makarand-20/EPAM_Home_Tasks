// http://www.codewars.com/kata/prefill-an-array


function prefill(n, v) {
    if (typeof(n) == 'boolean' || isNaN(Number(n)) || (n % 1) != 0 || Number(n) < 0) throw new TypeError(`${n} is invalid`)
    
    let array = new Array(Number(n));
    
    return array.fill(v);
  }