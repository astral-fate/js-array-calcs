'strict mode'

const list = [10, 20, 30, 40];

function text (){

    console.log(`this is text for a list: ${list}`);

}
text();

function add (item){

    list.push(item);
    list.push(item);
  
}
 
add( 50, 60);
console.log(list);


function remov (item){
    
     list.pop();
     list.pop();
     list.shift();
}
remov();
console.log(list);

