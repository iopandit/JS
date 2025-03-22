let myName = "Ishwar   "
let userName = "ish    "

// console.log(myName.trueLength);


let myHeros = ["Thor", "Caption America"]

let heroPower = {
    Thor : "hammer",
    Caption_America : "Shield",

    getThorPower :function(){
        console.log(`Captions has its weapon ${this.Caption_America}`);
        
    }
}

//created method ishwar FOR Object 
Object.prototype.ishwar = function(){
    console.log(`Ishwar is present is all Object`);
    
}

// myHeros.ishwar() //method on Object

// heroPower.ishwar() //method on array


//created method HeyIshwar FOR  Array
Array.prototype.heyIshwar = function(){
    console.log(`Hey !! Ishwar  from array`);
    
}

// myHeros.heyIshwar() //method on array

// heroPower.heyIshwar() //error  method on Object



//inheritance


const user = {
    name : "Username",
    email : "user@mail.com"
}
const teacher = {
    makeVideo : true
}

const teachingAssistance = {
    isAvailabel :false
}


const TAsupport = {
    makeAssignement : 'JS assignment',
    fullTime : true,
    __proto__ : teachingAssistance
}


teacher.__proto__ = user    


//modern Syntax


Object.setPrototypeOf(teachingAssistance , teacher)


let anotherUsername = " anotherUserName    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is ${this.trim().length}`);
    
}


anotherUsername.trueLength()


"One".trueLength()

"Two".trueLength()