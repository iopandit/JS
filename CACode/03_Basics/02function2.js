const user ={
    username:"MyuerName",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome t website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// function neqw(){
//     const username = "rafttar"
//     console.log(this.username);
    
// }

// neqw()


// const abs = ()=>{
//     const username = "rafttar"
//     console.log(this.username);
    
// }

// abs()

// const addTwo= (num1, num2)=> num1+ num2
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,5));
