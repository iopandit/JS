function sayMyName(){
    console.log("my name");
    
}
sayMyName  //points refresnce of function
//sayMyName() //calls the function


function addTwoNum(number1, number2)//this is parameters
{
    // return console.log(number1 + number2 );

    let result = number1+number2
    return result
    
}

const res = addTwoNum(4, 5)
//console.log("result ",res);

//addTwoNum(3,4)//arguments


function userLogin(unserName = "sam"){
    if(!unserName){
        console.log("Enter user name");
        return
    }
    return `${unserName} logged in!!!`
}


// console.log(userLogin());
//console.log(userLogin("Chandu"));



function addtoCart(...num1){
    return num1
}

//console.log(addtoCart(100));

//console.log(addtoCart(100,200,300));

function addCattr(val1,val2,...val3){
    return val3 
}

// console.log(addCattr(100,200,300,400,500));

const anyObject = {
    username : "Myusername",
    age : 66
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and age is ${obj.age}`);
    
}

//handleObject(anyObject)

//handleObject({username:"mynewusername",age:88})


anyArr = [1,2,3,4,5]

function returnSeconf(getarr){
    return getarr[1]
}

// console.log(returnSeconf(anyArr));

// console.log(returnSeconf([200,300,400]));

 