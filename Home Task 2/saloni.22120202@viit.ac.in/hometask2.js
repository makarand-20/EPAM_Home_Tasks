//Printing Array elements :

function printArray(array){
  return array.join(',');
}


//Opposite number :

function opposite(number) {
  return -number;
}


//Basic Mathematical Operations :

function basicOp(operation, value1, value2)
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

