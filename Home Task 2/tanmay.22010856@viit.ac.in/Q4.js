
function bCost(days,rate){
    return days*rate;
}

function discount(days){
    if(days>=7){
        return 50;
    }else if(days>=3){
        return 20;
    }else{
        return 0;
    }
}

function rentCarCost(days){
    return bCost(days,40) - discount(days);
}