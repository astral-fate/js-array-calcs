'strict script'



//using functions to pass the math to the cosnole

function calcTip (bill) {


    if (bill >= 50 && bill <= 300){
        return bill + 1;
    }
    else {
       return bill + ` + 1`;
    }
    //return calcTip;

}
calcTip();


const bills = [3, 5, 6];
console.log(bills);


//doing math on arrays


const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tip);