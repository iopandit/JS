//singlton

// Object.create

//object literals

const syb = Symbol("Key1")
const jsUser = {
    name : "name",
    "full name":"first middle last",
    [syb] : "mykey1",
    age: 23,
    location: "latur",
    email:"user@mail.com",
    isLoggedIn : true,
    lastLoginDays:["Monday","friday"]
}

// console.log(jsUser.email);

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[syb]);


jsUser.email = "user@google.com"

//Object.freeze(jsUser);

jsUser.email = "user@microsoft.com"

//console.log(jsUser);

jsUser.greeeting = function(){
    console.log("Hello JS User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello, Js User ,${this["full name"]}`);
    
}
console.log(jsUser.greeeting());
console.log(jsUser.greetingTwo());








