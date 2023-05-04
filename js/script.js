// Nav menu

const menuIcon = document.querySelector(".menu_icon");
const closeMenu = document.querySelector(".close_menu");
const returnMenu = document.querySelector(".return_menu");

const firstMenu = document.querySelector(".first_menu");
const secondMenu = document.querySelector(".second_menu");

menuIcon.addEventListener("click", () => {
  firstMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  firstMenu.style.display = "none";
});

returnMenu.addEventListener("click", () => {
  firstMenu.style.display = "block";
  secondMenu.style.display = "none";
});

// Adding proper menu title

const menuTitle = document.querySelector(".nav_gender_output");
const urlWomen = document.querySelector(".url_women");
const urlMen = document.querySelector(".url_men");
const urlUnisex = document.querySelector(".url_unisex");

urlWomen.addEventListener("click", () => {
  menuTitle.innerHTML = `Women`;
  secondMenu.style.display = "block";
  firstMenu.style.display = "none";
});

urlMen.addEventListener("click", () => {
  menuTitle.innerHTML = `Men`;
  secondMenu.style.display = "block";
  firstMenu.style.display = "none";
});

urlUnisex.addEventListener("click", () => {
  menuTitle.innerHTML = `Unisex`;
  secondMenu.style.display = "block";
  firstMenu.style.display = "none";
});

// View Cart
const viewCart = document.querySelector(".view_cart");
const cartIcon = document.querySelector(".cart_icon");
const closeCart = document.querySelector(".close_cart");

cartIcon.addEventListener("click", () => {
  viewCart.style.display = "block";
});

closeCart.addEventListener("click", () => {
  viewCart.style.display = "none";
});
