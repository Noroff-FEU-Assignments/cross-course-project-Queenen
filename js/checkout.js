const firstForm = document.querySelector("#checkout_1");
const secondForm = document.querySelector("#checkout_2");
const thirdForm = document.querySelector("#checkout_3");

const proceedBtn = document.querySelector(".proceed_btn");

const payBtn = document.querySelector(".pay_btn");

/* BUTTON NAVIGATION */

/* process steps */
const firstDot = document.querySelector(".first_dot");
const secondDot = document.querySelector(".second_dot");
const thirdDot = document.querySelector(".third_dot");

firstDot.style.backgroundColor = "darkgray";

proceedBtn.addEventListener("click", () => {
  firstForm.style.display = "none";
  secondForm.style.display = "flex";
  secondDot.style.backgroundColor = "darkgray";
});

payBtn.addEventListener("click", () => {
  secondForm.style.display = "none";
  thirdForm.style.display = "flex";
  thirdDot.style.backgroundColor = "darkgray";
});
