function calcCost(days){
    if(days<=2){
        console.log("cost=",days*40);
    }
    else if(days<=6){
        console.log("cost=",(days*40)-20);
    }
    else{
        console.log("cost=",(days*40)-50);
    }
}
calcCost(1);
calcCost(4);
calcCost(8);