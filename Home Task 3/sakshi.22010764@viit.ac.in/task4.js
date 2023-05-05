
let sum = (...nums) =>{
    return nums.reduce((total, num) => total + num, 0);
}

let mul = (...nums) =>{
    return nums.reduce((total, num) => total * num, 1);
}


let final = sum( mul(1,2,3), 4,5 ) 

console.log(final)