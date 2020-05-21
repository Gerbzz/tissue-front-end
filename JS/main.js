// main class to initialize all modules

(function (window) {
    "use strict"

    var App = window.App
    var Issue = App.Issue;
    var IssueStore = App.IssueStore;

    var myIssue = new Issue('IT-1001', new IssueStore());
    window.myIssue = myIssue;
})(window);