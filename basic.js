// let const var
// const number= 40; //imlicit declaration
// const num2=37;
// const num4=number + num2;
// console.log(num4);
// variable write in camelCast
// varialble must be meaningfull
// variable can be write in snackCsat

// Loops
// const list=[33,55,656,77,88,99]
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

// const string = "1, raja, swabi,3.56,5th,icp ";
// const [id, name, address, gpa, semester, institute] = string.split("");
// const name1 = "Faizan";
// const trim = name1.trim();
// console.log(trim);

// {Regular Expression}
// const str = "habib";
// const t = str.search(/[a-z]/i);
// console.log(t);

//{...}
// const list=[20,45,55,66,77,88]
// const list2 =[33,22,11,46,...list]
// console.log(list2);

// obj1={
//   name:'Raja',
//   marks:90,
//   gpa:3.99
// }
// obj2={
//   ...obj1,
//   Address:'swabi',
//   Country:'pakistan'
// }
// console.log(obj2);

// const sum=(a,b,c,d)=>{
// c=a+b+c+d;
// console.log(c);
// }
// const sum2=[33,40,60,70]
// sum(...sum2)

// const count = (a, b, ...c) => {
//   console.log(a + b);
//   const s = c.reduce((a, b) => a + b, 0);
//   console.log(s);
// };
// count(10, 20, 40, 60, 33, 55, 66, 77, 88);

// const fname = "Habib";
// const lname = "Rahman";
// const semester = 6;
// const marks = 90;
// const gpa = 3.99;
// const country = "Pakistan";
// const city = "Peshawar";
// const valage = "Swabi";
// const houseNO = 5;

// const data = {
//   fname,
//   lname,
//   semester,
//   marks,
//   gpa,
//   address: {
//     country,
//     city,
//     valage,
//     houseNO
//   }
// }
// console.log(data);

// {Mathes number in for obj}
// const test = 21.44444;
// const test2 = 50;
// const num = typeof test;
// const num2 = test2 + "";
// const num3 = test.toFixed(2);
// const num4 = test2.toPrecision(4);
// const num5 = Math.ceil(test);
// const num6 = Math.floor(test);
// console.log(num6);

//{set function}
// const s= new Set([1,2,3,4,5,6,7]);
// s.add(11);
// console.log(s);

//{Forin and Forof}

// const obj={
//   name:"habib",
//   age:"22",
//   gpa:3.99
// }
// const keys=Object.keys(obj);
// console.log(keys);

//const str="pakistan"
// for(let i=0;i<str.length;i++){
//   console.log(str[i]);
// }
// for(let j of str){
//   console.log(j);
// const d = new Date();
// console.log(d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds());
// console.log(d.getHours());

// Date 11/07/2024
// Arrays ,Objects & Functions

// Three Ways to create object litera, instance & object constructor

// Literal
// let Person = {
//     name : "Habib",
//     age : 25,
//     job : 'web developer',
//     address : {
//        city : 'swabi',
//        zip : 2543,
//     }
// }
// console.log(Person.address.city);
// console.log(Person);
// console.log(Person.name);
// console.log(Person.age);

// Instance

// var emp = new Object();
// emp.id=101;
// emp.name="Habib";
// emp.salary=500000;
// console.log(emp.id+ " " + emp.name + " "+ emp.salary+" ");

// Object constructor

// function emp2(id,name,salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
// }
//  e = new emp2(102,"Ikram", 500000);
// console.log(emp.id + " " + emp.name + " " + emp.salary + " ");

// There are three way to create array
// Literal
// let names = [42,2,3,"Habib",undefined]
// let = i = 0 ;
// for (let i = 0; i<names.length; i++){   //loops

//     console.log(names[i]);
// }

// console.log(names)
// names = names.sort();
// names.push("Developer")
// console.log(names)

//Loops
//const list=[33,55,656,77,88,99]
// for(let i=0; i<list.length; i++) {
//   console.log(list[i]);}

// let j=0;
// while(j < list.length){
//   console.log(list[j])
//   j++;
// }

// do{
//   console.log(list[i]);
//   i++;
// }while(i<10);
// map ,reducer and filter

// let arr = [10,2022,44,55,66,77]

//  let a = arr.map((value,index,array) => {
//     console.log(value)
//     return value+1;
// });
// console.log(a)

// // Filter
// let arr2 = [10,20,22,44,55,66,77]

//  let b = arr2.filter((a)=>{
//     return a<40;
// })

// console.log(b);

// // Reducer

// Syntax of reducer
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     return newAccumulatorValue;
//   }, initialValue);
let arr = [2, 8, 5, 5];
let avg = arr.reduce((accum, curnvalu, index, array) => {
  let total = (accum += curnvalu);
  if (index === array.length - 1) {
    return total / array.length;
  }
  return total;
});
console.log(avg);

// let arr3 = [1,2,3,4,5,6,7,8,9]
// let newarr3  = arr3.reduce((h1 , h2)=>{
//     return h1+h2;
// })
// console.log(newarr3);

// Instance
// var emp = new Array();
// emp[0] = "Habib";
// emp[1] = "shady";
// emp[2] = "Ikram";

// for (let i=0 ;i<emp.length;i++){
// console.log(emp[i]);
// }

// Functions

// let common = (name) =>{
//     console.log(name +" is a good boy");

// }
// let name1 = 'Habib';
// let name2 = 'ikram';
// let name3 = 'shadman';
// let name4 = 'zahoor';
// common(name1);
// common(name2);
// common(name3);
// common(name4);

// the function which have no arguments

// function hello() {
//     console.log("hello good morning")
//     return
// }
// hello();
