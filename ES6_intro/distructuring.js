// const product={name: 'shirt', price: 500, quantity: 7};

// const discount = product.price*20/100;
// const yourPay=product.price - discount;
// const vatAmount= product.price*7/100;
// const toalAmount= yourPay+vatAmount;


// const price= product.price;
// const discount = price*20/100;
// const yourPay=price - discount;
// const vatAmount= price*7/100;
// const toalAmount= yourPay+vatAmount;


const {name,price,quantity,tax=7}={name: 'shirt', price: 500, quantity: 7};


const discount = price*20/100;
const yourPay=price - discount;
const vatAmount= price*7/100;
const toalAmount= yourPay+vatAmount;
console.log(price);
console.log(tax,quantity);