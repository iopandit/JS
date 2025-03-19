const promiseOne = new Promise(function (resolve, reject) {
  // Do an async tsak
  // DB calls, cryptography, network

  setTimeout(function () {
    // console.log('Async task is Completed');
    resolve(); //connects the resolve() to then ()
  }, 1000);
});

promiseOne.then(function () {
  // console.log('Promise Consumed');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async task 2');
    resolve();
  }, 1000);
}).then(function () {
  // console.log('Async task 2 resolved');
});

const promieThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "User", email: "amil@gmail.com" });
  }, 1000);
});

promieThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Ishwar", password: "123456" });
    } else {
      reject("Error : Something went wrong!!!");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected !!");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Ishwar", password: "123456" });
    } else {
      reject("Error : Something went wrong!!!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()


/ async function getAllUsers(){
  //     try {
  //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
  //         const data = await response.json()
  //         console.log(data);
  //     } catch (error) {
  //         console.log("E: ", error);
  //     }
  // }
  
  //getAllUsers()
  
  fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
      return response.json()
  })
  .then((data) => {
      console.log(data);
  })
  .catch((error) => console.log(error))
  
  // promise.all
  // yes this is also available, kuch reading aap b kro.