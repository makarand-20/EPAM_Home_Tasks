function calci(operation, value1, value2)
{
  switch(operation){
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;    
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return 0;
    
  }
}

let operation = "+";
let value1 = 22;
let value2 = 55;
console.log(calci(operation, value1, value2)) // OUTPUT = 77