let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");
let noMatchText = document.querySelector(".no-match");

let passwordText = "";
let confirmText = "";

passwordInput.addEventListener("input", (e) => {
    passwordText = e.target.value;

    if (confirmText != passwordText) {
        passwordInput.style.border = "2px solid red";
        passwordInput.style.borderRadius = "5px";
        confirmInput.style.border = "2px solid red";
        confirmInput.style.borderRadius = "5px";
        noMatchText.textContent = "* Passwords do not match";
    } else {
        passwordInput.style.border = "2px solid green";
        confirmInput.style.border = "2px solid green";
        noMatchText.textContent = "";
    }
});
confirmInput.addEventListener("input", (e) => {
    confirmText = e.target.value;

    if (confirmText != passwordText) {
        passwordInput.style.border = "2px solid red";
        passwordInput.style.borderRadius = "5px";
        confirmInput.style.border = "2px solid red";
        confirmInput.style.borderRadius = "5px";
        noMatchText.textContent = "* Passwords do not match";
    } else {
        passwordInput.style.border = "2px solid green";
        confirmInput.style.border = "2px solid green";
        noMatchText.textContent = "";
    }
});
