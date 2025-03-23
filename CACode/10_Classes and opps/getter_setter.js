class User  {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email = val
    }

    get password(){
        // return this._password.toUpperCase()
        return   `${this._password}username`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}


const UOne = new User('U1@gmail.com', "abc")
console.log(UOne.password);
console.log(UOne.email);
