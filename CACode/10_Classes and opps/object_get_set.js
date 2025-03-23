
const User = {
    _email: "i@google.ai",
    _password : 456,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value

    }
}

const person = Object.create(User)
console.log(person.email);
