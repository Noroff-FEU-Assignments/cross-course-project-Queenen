// Form validation

const sendBtn = document.querySelector(".send_message");
const form = document.querySelector("#contact_form");
const loader = document.querySelector(".loader");

const fullName = document.querySelector("#full_name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const nameError = document.querySelector(".name_error");
const emailError = document.querySelector(".email_error");
const subjectError = document.querySelector(".subject_error");
const messageError = document.querySelector(".message_error");
const validateError = document.querySelector(".validate_error");

loader.style.display = "none";

function validateForm() {
  if (checkLength(fullName.value, 6) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 5) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 10) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    validateEmail(email.value) &&
    checkLength(message.value, 10) &&
    checkLength(subject.value, 5) &&
    checkLength(fullName.value, 6)
  ) {
    loader.style.display = "block";
    setTimeout(() => {
      form.innerHTML = `<div class="contact_message_sent"><p class="title bold">Your message is sent!</p>
      <p>We will get back to you as soon as possible</p></div>`;
      loader.style.display = "none";
    }, 2000);
  } else {
    validateError.style.display = "block";
  }
}

sendBtn.addEventListener("click", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
