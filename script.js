let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");
let noMatchText = document.querySelector(".no-match");

let passwordText = "";

passwordInput.addEventListener("input", (e) => {
    passwordText = e.target.value;
});
confirmInput.addEventListener("input", (e) => {
    if (e.target.value != passwordText) {
        passwordInput.style.border = "1px solid red";
        confirmInput.style.border = "1px solid red";
        noMatchText.textContent = "* Passwords do not match";
    } else {
        passwordInput.style.border = "1px solid green";
        confirmInput.style.border = "1px solid green";
        noMatchText.textContent = "";
    }
});
