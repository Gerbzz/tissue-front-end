// Purpose of this script is to capture the users input (username/password) and store them in userStore


// Grabs the users input and stores them in userStore.js
function handleReg() {
    'use strict';
    var userName = document.getElementById("inputEmail").Value;
    var password = document.getElementById("inputPassword").Value;
    var confirmPassword = document.getElementById("confirmInputPassword").Value;
    var userStore = new App.UserStore();
    userStore.save(userName, password)

    // IF statement to confirm both passwords match before saving
    if (password == confirmPassword) {
        window.location.href = "Issues.html";
        return false;

    } else {
        alert('passwords do not match.');
        return false;
    }

}// end of handleReg


// This part activates the function above to run when the user clicks submit.
window.onload = function () {
    document.getElementById("regForm").onsubmit = handleReg();

}
