//const  tinderUser = new Object

const tinderUser = {}

//console.log(tinderUser);

tinderUser.id = "123sbc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser);


const regUser = {
    email: "user@gmail.com",
    username:{
        fullname:{
            firstname :"first",
            lastname:"last"
        }
    }
}

// console.log(regUser.username?.fullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3 = {...obj1, ...obj2}
//const obj3 = Object.assign(obj1,obj2)
const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);

// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));


const course = {
    coursename: "JS",
    price:"999",
    courseInstructor:"HC"
}

const {courseInstructor:instructor} = course 

//console.log(courseInstructor);
//console.log(instructor);


