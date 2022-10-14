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
