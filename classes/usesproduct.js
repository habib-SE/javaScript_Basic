const Product = require('./Product');

const p1 = new Product();
p1.name = 'Product 1'
p1.price = 100;
p1.qty = 10;


const p2 = new Product();
p2.name = "digital watch"
p2.price = 4000;
p2.qty = 200;
const bill = p2.bill();
console.log(bill);

