function prefill(n, v) 
{
    if(n<0 || typeof(n) == 'boolean' || isNaN(Number(n))){
        throw new TypeError(`${n} must be greater than`);
    }
   
    let array = new Array(Number(n));
   return array.fill(v);
}