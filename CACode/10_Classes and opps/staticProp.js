class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){
        return `123`
    }

}

const UserOne = new User ('UOne')

// console.log(UserOne.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const TOne = new Teacher('Tone','t@gmail.com')

TOne.logme()