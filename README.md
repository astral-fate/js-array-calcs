# js-array-calcs
an example on how to do some calcs on arrays

say for example we have a list of prices of fruits we want to buy from the supermarket, and its as follows


              const bill = [20, 30, 15]
              
              
              
 now the original price of these fruits, is added to some fee, according to the follwing rules:
 if price greater than 50, and less  than 300, the fee is %15. Otherwise, the fee is %20
 
 for these conditions, we define if statments, and orgnize it in a function as follows:
 
 
 
 

function calcTip (bill) {


    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }
    else {
        return bill * .20;
    }


  }     
  
  
  

in this functtion, we asign a parameter named bill, yet we didn't asign a value to it. Hence, the value of the function's parameter, will be passed by another variable.


then to pass these calcs that took place on the array, we pass it to the console as follows:



            const bills = [20, 30, 15];
            console.log(`each item coasts: ${bills}`);


            //doing math on arrays

            const tip = [calcTip(bills[0])+bills[0], calcTip(bills[1])+bills[1], calcTip(bills[2])+bills[2]];

            console.log(`the items with fee coasts: ${tip}`);



   
 notice how we did the math, by working on the index of the array, so e.g:
 
                          bills[0] //is the 1st index on the array
 
 by calling the name of the method here, we are returning the calcs that took place on the function, so these calcs are passed to our specfic index
 
                          calcTip(bills[0])
 
  
  
  
  
  the output
   
   
   ![image](https://user-images.githubusercontent.com/63984422/148391149-ab89236d-777a-484a-9b14-4751fa7897f4.png)

   
   
   
notice here that we have used the method return, without calling the function, and we haven't useed a console because the output will be as follows:


![image](https://user-images.githubusercontent.com/63984422/148390701-8c46546a-b16d-4d72-85c8-bee481f1e141.png)

