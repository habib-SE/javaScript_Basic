// const one = (callback) => {
//   setTimeout(() => {
//     console.log("one");
//     callback();
//   }, 5000);
// };
// const two = (callback) => {
//   setTimeout(() => {
//     console.log("two");
//     callback();
//   }, 3000);
// };
// const three = (callback) => {
//   console.log("three");
//   callback();
// };

//CallBack Hell
// one(() => {
//   two(() => {
//     three(() => {
//       console.log("done");
//     });
//   });
// });

//Es6
//Promises
const onee = () => {
  return new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("Random number was not supported");
    } else {
      setTimeout(() => {
        console.log("One");
        resolve();
      }, 6000);
    }
  });
};

const twoo = () => {
  return new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("Random number was not supported");
    } else {
      setTimeout(() => {
        console.log("Two");
        resolve();
      }, 4000);
    }
  });
};

const threee = () => {
  return new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
      reject("Random number was not supported");
    } else {
      setTimeout(() => {
        console.log("Three");
        resolve();
      }, 3000);
    }
  });
};




// 6 Statics Methods
// Promise.all 
// Promise.all([onee() , twoo(), threee(),]).then(() =>{
//   console.log("All promises resolved")
// }).catch(function(error){
//   console.log(error);
// });

// Promise.allSettled
// Promise.allSettled([onee(), twoo(), threee()]).then((results) => {
//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(`Promise ${index + 1} fulfilled`);
//     } else {
//       console.log(`Promise ${index + 1} rejected: ${result.reason}`);
//     }
//   });
// }).catch((error) => {
//   console.log('Unexpected error:', error);
// });

// Race
// Promise.race([onee(), twoo(), threee()]).then((results) => {
//   results.forEach((result, index) => {
//     if (result.status === 'fulfilled') {
//       console.log(`Promise ${index + 1} fulfilled`);
//     } else {
//       console.log(`Promise ${index + 1} rejected: ${result.reason}`);
//     }
//   });
// }).catch((error) => {
//   console.log('Unexpected error:', error);
// });

// Promise.any
Promise.any([onee(), twoo(), threee()]).then((result) => {
  console.log("First promise to fulfill:", result);
}).catch((errors) => {
  console.log('All promises were rejected:', errors);
});
//this is smaller then call back hell
// onee().then(() => {
//   twoo().then(() => {
//     threee().then(() => {
//       console.log("done");
//     });
//   });
// });

//Async Await
// async function run() {
//   await onee();
//   await twoo();
//   await threee();
// }
// run();
