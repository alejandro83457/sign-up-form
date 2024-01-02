let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");
let noMatchText = document.querySelector(".no-match");

let passwordText = "";
let confirmText = "";

// Function is used by text event handlers to check
// if passwords match
const checkPasswordFields = (e, type) => {
    if (type == "pass") passwordText = e.target.value;
    else confirmText = e.target.value;

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
};

// Event handlers
passwordInput.addEventListener("input", (e) => checkPasswordFields(e, "pass"));
confirmInput.addEventListener("input", (e) => checkPasswordFields(e, "conf"));
