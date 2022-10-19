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

// CallBack Hell
// one(() => {
//   two(() => {
//     three(() => {
//       console.log("done");
//     });
//   });
// });

//Es6
//Promises

const one = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("one");
      resolve();
    }, 5000);
  });
};
const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("two");
      resolve();
    }, 1000);
  });
};
const three = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("three");
      resolve();
    }, 3000);
  });
};

// //this is smaller then call back hell
// one().then(() => {
//   two().then(() => {
//     three().then(() => {
//       console.log("done");
//     });
//   });
// });

//Async Await
async function run() {
  await one();
  await two();
  await three();
}
run();
