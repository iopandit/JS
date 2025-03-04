//array 
const myArr = [0,1,2,"name",true]

//array methods

// myArr.push(3);
// myArr.pop()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf("name")); //3

// console.log(myArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

