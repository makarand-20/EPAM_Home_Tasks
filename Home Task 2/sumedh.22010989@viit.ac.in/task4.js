// https://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
	var amount, dailyCharge = 40;
	if(d >= 7) {
		amount = (dailyCharge * d) - 50;
	} else if (d >= 3) {
		amount = (dailyCharge * d) - 20;
	} else {
		amount = dailyCharge * d;
	}
	return amount;
}