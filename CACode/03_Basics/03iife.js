//Immediately Invoked Function Expression (IIFE)
(function one (){
    //named iife
    console.log("DB CONNECTED!!!");
    
})();

(()=>{
    console.log("DB CONNECTED TWO!");
    
})();


((name)=>{
    console.log(`DB CONNECTED TWO! ${name}`);
    
})("my Name");