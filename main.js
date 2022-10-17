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