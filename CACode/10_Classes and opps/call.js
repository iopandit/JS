function setUserName(username) {
    //complex db calls

    this.username = username

    console.log(`Called`);
    
}

function createUser(userName,email,password){
    
    setUserName.call(this,userName)
    
    this.email = email
    this.password = password
}

const user = new createUser("ish","i@mail.com","123")

console.log(user);

