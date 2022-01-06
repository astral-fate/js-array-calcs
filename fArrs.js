'strict script'



//using functions to pass the math to the cosnole

function calcTip (bill) {


    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }
    else {
        return bill * .20;
    }


}



const bills = [20, 30, 15];
console.log(`each item coasts: ${bills}`);


//doing math on arrays

const tip = [calcTip(bills[0])+bills[0], calcTip(bills[1])+bills[1], calcTip(bills[2])+bills[2]];

console.log(`the items with fee coasts: ${tip}`);
