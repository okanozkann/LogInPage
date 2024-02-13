const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const title = document.getElementById(".title");
const button = document.getElementById("button");
const message = document.getElementById(".message");

//! Event Listeners for real-time input validation
username.addEventListener("input", validateusername);
email.addEventListener("input", validateemail);
password.addEventListener("input", validatepassword);
confirmpassword.addEventListener("input", validateconfirmpassword);

//! Event Listener for from submission
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(
        validateusername()&&
        validateemail()&&
        validatepassword()&&
        validateconfirmpassword()
    ){
        sumbittedFrom();
    }
});

//! Validation functions

function validateusername() {
    const usernameValue = username.value.trim();
    if(usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
        return false;
    } else {
        setSuccessFor(username);
        return true();
    }
}

function validateemail() {
    const emailValue = email.value.trim();
    if(emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
        return false;
    } else {
        setSuccessFor(email);
        return true();
    }
}

function validatepassword() {
    const passwordValue = password.value.trim();
    if(passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
        return false;
    } else {
        setSuccessFor(password);
        return true();
    }
}

function validateconfirmpassword(){
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    if(confirmpasswordValue === ""){
        setErrorFor(confirmpassword, "Confirm Password cannot be blank");
        return false();
    } else if (passwordValue !== confirmpasswordValue){
        setErrorFor(confirmpassword, "Password does not match!");
        return false();
    } else {
        setSuccessFor(confirmpassword);
        return true();
    }
}

//! Helper functions
 function setErrorFor(input,message){
    const inputControl = input.parentElement;
    const small = inputControl.querySelector("small");

    small.innerText = message;
    InputControl.classList.remove("success");
    inputControl.classList.add("error");
    inputControl.style.paddingBottom = "20p";
    inputControl.style.marginBottom = "14p";
 }

 function setSuccessFor(input){
    const inputControl = input.parentElement;
    inputcontrol.classList.remove("error");
    inputControl.classList.add("success");
    inputControl.style.paddingBottom = "0".
    inputControl.style.manginBottom = "20px";
 }

//! Checking email
function isEmail(email){
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

//! Showing the 'submitted' message
function sumbittedFrom(){
    title.classList.add("hidden");
    form.classList.add("hidden");
    message.classList.remove("hidden");
    setTimeout(() => location.reload(true), 2500);
}