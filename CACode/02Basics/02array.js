const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);

//spread 

const new_all_heros = [...marvel_heros, ...dc_heros]; //work same as concat
// console.log(new_all_heros);


const an_array = [1,2,3,[4,5],6,7,[8,9,[10,11,[12,13,14]]]]
const flat_array  = an_array.flat(Infinity)
// console.log(flat_array);


// console.log(Array.isArray("name"));
// console.log(Array.from("name"));
// console.log(Array.from({name: "name"})); //reutns empty array 


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));


