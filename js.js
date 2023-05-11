const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordconfirmerr = document.querySelector("#passwordconfirmerr");

console.log(password); // check if element is found
console.log(passwordConfirm); // check if element is found
function checkPasswords() {
  if (password.value !== passwordConfirm.value) {
    passwordconfirmerr.textContent = "passwords must match";
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", checkPasswords);
