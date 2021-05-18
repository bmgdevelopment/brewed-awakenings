import { getProducts } from './database.js';

const products = getProducts();

export const Products = () => {
  let html = '<ul>';

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`; //changed product.title to product.name
  }

  html += '</ul>';

  return html;
};

//ADDED FOR PRODUCT LINE ITEM TO BE CLICKABLE FOR PRICE WINDOW TO APPEAR 
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.id.startsWith('product')) {
    const [,productId] = itemClicked.id.split('--'); //output will be a STRING not a number ex. ['','1']

    for (const prod of products) {
      if (prod.id === parseInt(productId)) { //parseInt used to convert productId from STRING to int
        window.alert(`${prod.name} costs \n $${prod.price}`);
      }
    }
  }
});
