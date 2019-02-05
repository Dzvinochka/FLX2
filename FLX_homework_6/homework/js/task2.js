let price = parseFloat(prompt('Input amount of money', ''));
let discount = parseFloat(prompt('Input the discount', ''));

if (isNaN(price) || isNaN(discount) || price <= 0 || price > 9999999 || discount < 0 || discount > 99) {
    alert('Invalid input data');
} else {
    let newPrice = price - price * discount / 100;
    let saved = price * discount / 100;
    price = +(price.toFixed(2));
    discount = +(discount.toFixed(2));
    newPrice = +(newPrice.toFixed(2));
    saved = +(saved.toFixed(2));
    alert(`Price with discount: ${price}
    Discount: ${discount}%
    Price with discount: ${newPrice}
    Saved: ${saved}`); 
}