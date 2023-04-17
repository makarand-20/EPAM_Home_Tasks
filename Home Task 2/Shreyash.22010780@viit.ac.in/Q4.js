// Problem :
//http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters


// Solution :
function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+': return value1 + value2;
      case '-': return value1 - value2;
      case '*': return value1 * value2;
      case '/': return value1 / value2;
      default: return 'Operation must be one of + - * /';
  }
}