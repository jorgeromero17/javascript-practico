const menuEmail = document.querySelector('.navbar-email');
const burgerMenuIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

//aside de detalle de producto
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click',closedProductDetailAside);
//aside de detalles elementos a reemplazar
const productImageDetail = document.querySelector('#productImageDetail');
const productPriceDetail = document.querySelector('#productPriceDetail');
const productNameDetail = document.querySelector('#productNameDetail');

menuEmail.addEventListener('click',toggleDesktopMenu);
burgerMenuIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCart);

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
}

function closedProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}


//Productos
const productList = [];
productList.push(
{
  id:0,
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
  id:1,
  name: 'Pro Camera',
  price: 1200,
  image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
},
{
  id:2,
  name: 'Fragance',
  price:50,
  image: 'https://images.pexels.com/photos/12538232/pexels-photo-12538232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
  id:3,
  name: `Men's Watch`,
  price:100,
  image: 'https://images.pexels.com/photos/9982635/pexels-photo-9982635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
);

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function renderProducts(product) {
  for (const product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImage = document.createElement('img');
    productImage.setAttribute('src',product.image);
    productImage.addEventListener('click',function(){
      productImageDetail.setAttribute('src',product.image);
      productNameDetail.innerText = product.name;
      productPriceDetail.innerText = `$${product.price}`;
      openProductDetailAside();
    })
  
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