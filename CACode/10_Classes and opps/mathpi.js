const Mathpi = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Mathpi);

// console.log(Math.PI);


const  Student = {
    name : "StudentName",
    age : 20,
    isPresent : true ,
    
    getResult :function(){
        console.log(`you are passed`);
    }
}

for (let [key,value] of Object.entries(Student)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);

    }
    
}

console.log(Object.getOwnPropertyDescriptor(Student,'name'));

Object.defineProperty(Student,'name',{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(Student,'name'));

for (let [key,value] of Object.entries(Student)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);

    }
    
}