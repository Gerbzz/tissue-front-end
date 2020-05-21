// issue module

(function (window) {
    "use strict";

    var App = window.App || {};

    function Issue(db) {
        this.db = db;
        this.id = idGenerator();
    }

    Issue.prototype.createIssue = function (userName, description) {

        var issue = { userName: userName, description: description, id: this.id() }
        console.log("Adding Issue");
        this.db.add(issue);

    };

    Issue.prototype.compIssue = function (issueComp) {
        console.log("Deleteing Issue");
        this.db.remove(issueComp);
    };

    Issue.prototype.retrieveIssue = function () {
        var issueIdArray = Object.keys(this.db.getAll());

        console.log(this.issueId)
        issueIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
    };

    function idGenerator() {
        var id = 1;
        function generator() {
            id++;
            return id;
        }
        return generator;
    }


    App.Issue = Issue;
    window.App = App;
})(window);