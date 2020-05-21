// signIn.js 
// Neil Gerbe - COP2803 - #2434 

// Function is called when the form is submitted
// Function Validates the form data and returns a Boolean value.
function validateForm() {
    'use strict';

    // Get references to the form elements:
    let userName = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    // stored data from the regForm
    let userStore = new App.userStore();
    let actualPassword = userStore.get(userName);

    // Validate
    if (!actualPassword) {
        window.location.href = "registration.html";
        return false;
    } else if ((userName != "admin@tissue.com") && (password == actualPassword)) {
        window.location.href = "Issues.html";
        return false;
    } else if ((userName == "admin@tissue.com") && (password == "admin123")) {
        window.location.href = "subscription-dashboard.html";
        return false;
    } else {
        alert('username and/or password do not match.');
        return false;
    }


} // End of validateForm() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.

function init() {
    'use strict';

    // confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        let loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm();
    }
} // End of Init() function.

//assign an event listen to the window's load event:
window.onload = init;