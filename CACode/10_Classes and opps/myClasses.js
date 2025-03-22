class User{
 constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
 }   

 encryptPasword(){
    return `${this.password}abc`
 }

 upperUsername(){
    return `${this.username.toUpperCase()}`
 }
}

const userOne = new User('UserOne','one@gmail.com',123)

console.log(userOne.encryptPasword());
console.log(userOne.upperUsername());



//behind the Scene of class

const User = function(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPasword = function(){
    return `${this.password}abc`
}

User.prototype.upperUsername = function(){
    return `${this.username.toUpperCase()}`
}

const UserTwo = new User('UserTwo','usertwo@gmsil.com',456)


console.log(UserTwo.encryptPasword());
console.log(UserTwo.upperUsername());
