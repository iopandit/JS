const promiseOne = new Promise(function(resolve, reject){
    // Do an async tsak
    // DB calls, cryptography, network

    setTimeout(function(){
        // console.log('Async task is Completed');   
         resolve() //connects the resolve() to then ()
    },1000)
})

promiseOne.then(function(){
    // console.log('Promise Consumed');
    
})



new Promise(function(resolve,reject){

    setTimeout(function(){
        // console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    // console.log('Async task 2 resolved');
    
})




const promieThree = new Promise(function(resole,reject){
    setTimeout(function(){
        resole({userName : "User" , email : "amil@gmail.com"})
    },1000)
})


promieThree.then(function(user){
    console.log(user);
    
})