// Problem statement Link
//http://www.codewars.com/kata/transportation-on-vacation
//Name: Animish Chopade

// Solution
function baseCost(days, rate) {
        return days * rate;
}

function discountRate(days) {
        if (days >= 7) {
                return 50;
        }
        else if (days >= 3) {
                return 20;
        }
        else {
                return 0;
        }
}

function rentalCarCost(days) {
        return baseCost(days, 40) - discountRate(days);
}