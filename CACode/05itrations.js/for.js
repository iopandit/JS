for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i < 10; i++) {
    // console.log(`outer value is ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`outer value is ${i} and inner value is ${j}`);
        // console.log(i + "*" + j + "="+ i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
}

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i ==5 ) {
//         console.log("5 is the number");
        
//     }
//     console.log(i);
    
// }




//break & continue

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        // console.log('detected 5');

        break
    }
    // console.log(`value of i ${index}`);


}


// for (let index = 0; index < 10; index++) {

//     if (index == 5) {
//         console.log('detected 5');
        
//         continue //ignores for one condition but continues execution code of for loop
//     }
//     console.log(`value of i ${index}`);

// }

