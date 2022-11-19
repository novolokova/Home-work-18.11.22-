// написати скрипт, який створює об'єкт Товар з
// властивостями:  назва, ціна, валюта
// методами: показати усю інформацію про товар,
//  установити знижку на ціну і повернути нову ціну з урахуванням знижки

function Product(productName, price, curency, discount) {
  this.productName = productName;
  this.price = price;
  this.curency = curency;
  this.discount = discount;
}

function MethodForProduct() {
  this.getProductInfo = function (productName, price, curency) {
    return `Product name: ${productName}
price: ${price}
curency: ${curency}`;
  };
  this.showProductInfo = function (info) {
    console.log(info);
  };
  this.discountForProduct = function (price, discount, curency) {
    price = price - (price * discount) / 100;
    return `discount: ${discount}%
discuont price: ${price} ${curency}`;
  };
}

Product.prototype = new MethodForProduct();

const telephone = new Product("Samsung", 15000, "ua");
telephone.showProductInfo(telephone.getProductInfo("Samsung", 15000, "ua"));
telephone.showProductInfo(telephone.discountForProduct(1500, 12, "ua"));

