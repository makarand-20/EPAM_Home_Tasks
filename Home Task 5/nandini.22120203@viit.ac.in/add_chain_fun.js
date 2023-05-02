function take(arr){
    const callbacks =[];
    for(let i=0;i<3;i++)
    {
        callbacks.push(arr[i])
    }
    return callbacks;
    }

const arr=[1,2,3];
console.log(take(arr));