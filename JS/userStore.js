// userStore stores users information during registration.
(function (window) {
    "use strict"

    var App = window.App || {};
    function UserStore() {
        console.log("Calling UserStore Function");
        sessionStorage.setItem("admin@tissue.com", "admin123");

    }

    //Save: saves the users information

    UserStore.prototype.save = function (userName, password) {
        sessionStorage.getItem(userName, password)
    }

    //Get: gets the users information

    UserStore.prototype.save = function (userName) {
        let userPassword = sessionStorage.getItem(userName)
        return userPassword
    };
    App.UserStore = UserStore;
    window.App = App;
})(window);