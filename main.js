const menuEmail = document.querySelector('.navbar-email');
const burgerMenuIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenuIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCart);

function toggleDesktopMenu() {
  productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetail.classList.toggle('inactive');
}

//Productos
const productList = [];
productList.push(
{
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
  name: 'Pro Camera',
  price: 1200,
  image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  name: 'Fragance',
  price:50,
  image: 'https://images.pexels.com/photos/12538232/pexels-photo-12538232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
  name: `Men's Watch`,
  price:100,
  image: 'https://images.pexels.com/photos/9982635/pexels-photo-9982635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
);

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(product) {
  for (const product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImage = document.createElement('img');
    productImage.setAttribute('src',product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDivHijo = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productFigure = document.createElement('figure');
    const productFigureImage = document.createElement('img');
    productFigureImage.setAttribute('src',`./icons/bt_add_to_cart.svg`);
  
    productCard.append(productImage,productInfo);
    productInfo.append(productInfoDivHijo,productFigure);
    productInfoDivHijo.append(productPrice,productName);
    productFigure.appendChild(productFigureImage);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
renderProducts(productList);
renderProducts(productList);