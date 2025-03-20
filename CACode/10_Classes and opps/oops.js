const  user ={
    userName : "Ishwar",
    loginCount : 5,
    isSignedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from DB");
        // console.log(`Username is ${this.userName}`);
        console.log(this);
        
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount  = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`); //use this bcz after changing the value it get first value
        
    }
    return this
}

const userOne = new User("Ishwar",8,false)
// console.log(userOne);

const userTwo = new User("Username11", 1, true)
// console.log(userOne.greeting());

userOne.username = " ABC" // that whay use this.username

// console.log(userOne.greeting());

console.log(userOne.constructor);



//instanceOf