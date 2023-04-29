// Your task is to write a compose function which can compose any number of functions together.

function compose(...funcs) {
    return function(arg) {
      return funcs.reduceRight((result, func) => func(result), arg);
    };
  }


let addOne = (num) =>{
return num + 1;
}

let double = (num) =>{
return num * 2;
}

let square = (num) =>{
return num * num;
}
  
const composed = compose(square, double, addOne);
  
console.log(composed(5)); 
  