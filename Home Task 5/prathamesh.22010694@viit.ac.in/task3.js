function createFunctions(n) {
    var callbacks = [];

    for (let i=0; i<n; i++) {
        callbacks.push(i);
    }
    
    return callbacks;
}
console.log(createFunctions(5)) 

//  Output
// [
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)]
//   ]