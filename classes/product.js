class Product {
  name;
  price;
  qty;
  delivery = () => {

  };
  bill = () => {
    return this.price * this.qty;
  }
}
// Export the class
module.exports = Product;
