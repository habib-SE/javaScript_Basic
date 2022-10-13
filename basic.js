// let const var
// const number= 40;
// const num2=37;
// const num4=number + num2;
// console.log(num4);
// variable write in camelCast
// varialble must be meaningfull
// variable can be write in snackCsat

// Loops
//const list=[33,55,656,77,88,99]
// for(let i=0; i<list.length; i++) {
//   console.log(list[i]);}
// let j=0;
// while(j < list.length){
//   console.log(list[j])
//   j++;
// }
// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<10);

// Object
// const data = {
//   marks: 50,
//   name: 'habib',
//   semester: 4,
//   gpa: 3.25,
//   ispass: true,
//   friendes: [`raja,shady , usama, ravi`],
//   address: {
//   city: 'swabi',
//   country: 'pakistan',
//   tehsil: 'topi',
//   }
// }

// console.log(data.gpa);

// Filter mape reduce
//const marks = [20, 2, 13, 10, 55];
//const remain = [44,50];
// const sum = marks
//   .sort((a, b) => a - b)
//   .filter((n) => n > 13)
//   .map((n) => n + 10)
//   .reduce((a, b) => a + b, 0);

// console.log(sum);
// const l =marks.indexOf(55);
// console.log(l);
// const full = marks.concat(remain);
// console.log(full);

 const string =("1, raja, swabi,3.56,5th,icp ");
 const[id, name,address,gpa,semester,institute]=
 string.split(",");
 const name1= "Faizan";
const trim= name1.trim();
