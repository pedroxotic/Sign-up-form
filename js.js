const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
// const passwordconfirmerr = document.querySelector("#passwordconfirmerr");

console.log(password); // check if element is found
console.log(passwordConfirm); // check if element is found
function checkPasswords() {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity("passwords must match");
  } else {
    passwordConfirm.setCustomValidity("");
  }
}

const form = document.querySelector("form");
passwordConfirm.addEventListener("input", checkPasswords);
