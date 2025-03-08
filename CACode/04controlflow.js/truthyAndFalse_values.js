//const email = "h@mail.com"

// const email = []

// const email = {}


// if (email) {
//     console.log("has mail");
// }else{
//     console.log(("doen't have mail"));
    
// }

//falsey values
//flase , 0, -0, bigInt 0n,"", null, undefined, Nan

//truthy values
//"0", 'false', ' ',[] .{}, fucntion(){} 


const userMail = []
if (userMail.length === 0) {
    // console.log('Array is empty');
    
}


const   emptyObject={}

if (Object.keys(emptyObject).length===0) {
    // console.log("Object is empty");
}


//Nullish Coalescing oprator (??): null, undefined  //used for


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 =null??NaN ?? 5 ?? 16
// console.log(val1);


//ternary oprator

//confotion ? true : false

const price = 100

price >=80 ? console.log('price is mode that 80') : console.log('price is less than 80');

