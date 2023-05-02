// Problem statement Link
// http://www.codewars.com/kata/basic-mathematical-operations
//Name: Animish Chopade

// Solution
function basicOp(operation, value1, value2) {
        switch (operation) {
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
