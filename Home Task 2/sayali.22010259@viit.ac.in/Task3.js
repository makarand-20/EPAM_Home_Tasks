
//Basic Mathematical Operations

function basicOperations(operator,value1,value2){
    switch(operator){
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 /value2;
        default:
            return 0;
    }
}