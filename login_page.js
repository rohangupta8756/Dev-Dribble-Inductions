

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if(username.length==0 || password.length==0){
    alert("Please fill in the username and password to login");
    }
    if(password.length < 8){
          alert("Your password isn't valid and should be greater than 8 characters");
          location.reload();
            }

        else{
    if (username === "username" && password === "password") {
        alert("You have successfully logged in");
        window.open(href = 'secondPage.html', '_blank');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    }
})