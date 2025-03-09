// myarr =['antman','ironman','batman','superman']

// for (const val of myarr) {
//     console.log(val);

// }

// const greeting = "Hello World!!"

// for (const greet of greeting) {
//     console.log(greet);

// }


//maps

const map = new Map()

map.set("In", 'India')
map.set('Usa', 'unites state of Amertiac')
map.set("fr", 'framce')
map.set("In", 'India')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);

}



const myObject = {
    sub1: 'Math',
    sub2: "Eng",
    sub3: 'Mar'
}

for (const key in myObject) {
    // console.log(`${key} for Obj is ${myObject[key]}`);

}


const prg = ['js', 'py', 'cpp']

for (const lanf in prg) {
    // console.log(lanf);
    // console.log(prg[lanf]);


}

// prg.forEach(function(item){
//     console.log(`item is ${item}`);

// })



// prg.forEach((item)=>{
//     console.log(item);

// })

function printME(item) {
    console.log(item);

}

// prg.forEach()


prg.forEach((item, index, arr) => {
    // console.log(item, index, arr);

})


const myCode = [{
    lang_name: 'javascript',
    lang_short: 'js'
},
{
    lang_name: 'java',
    lang_short: "java"
},
{
    lang_name: "python",
    lang_short: "py"
}]

myCode.forEach((val)=>{
    // console.log(val);
    // console.log(val.lang_name);
    
})


const muNums = [1,2,3,4,5,6,7,8,9,10]

// const muNy= muNums.filter((num)=> num> 5)

// console.log(muNy);

const muNy= muNums.filter((num)=> {
    return num > 5
})


const myNewNums = []

muNums.forEach((num)=>{
    if (num  > 5) {
        myNewNums.push(num)
    }
})
console.log(myNewNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);