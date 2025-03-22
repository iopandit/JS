class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourrse(){
        console.log(`A new Course was added by ${this.username}`);
        
    }
}


const TOne = new Teacher('TeaOne','T1@gmail.com',123)

TOne.logMe()

TOne.addCourrse()

console.log(TOne instanceof User);

console.log(TOne instanceof Teacher);



