# js-array-calcs
an example on how to do some calcs on arrays

say for example we have a list of prices of fruits we want to buy from the supermarket, and its as follows


              const bill = [20, 30, 15]
              
              
              
 now the original price of these fruits, is added to some fee, according to the follwing rules:
 if price greater than 50, and less  than 300, the fee is %15. Otherwise, the fee is %20
 
 for these conditions, we define if statments, and orgnize it in a function as follows:
 
 
 
 
     if (bill >= 50 && bill <= 300){
        return bill + 1;
    }
    else {
       return bill + ` + 1`;
