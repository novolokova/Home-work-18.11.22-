// написати скрипт, який створює об'єкт Товар з
// властивостями:  назва, ціна, валюта
// методами: показати усю інформацію про товар,
//  установити знижку на ціну і повернути нову ціну з урахуванням знижки

function Product(productName, price, curency, discount) {
  this.productName = productName;
  this.price = price;
  this.curency = curency;
}

function MethodForProduct() {
  this.getProductInfo = function () {
    return `Product name: ${this.productName}
price: ${this.price}
curency: ${this.curency}`;
  };
  this.showProductInfo = function (info) {
    console.log(info);
  };
  this.discountForProduct = function (discount) {
    this.price = this.price - (this.price * discount) / 100;
    return this.price;
  };
}

Product.prototype = new MethodForProduct();

const telephone = new Product("Samsung", 15000, "ua");
telephone.showProductInfo(telephone.getProductInfo());
telephone.showProductInfo(telephone.discountForProduct(15));

