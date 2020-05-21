// IssueStore: the purpose of this script is to create,retrieve and remove issues.

(function (window) {
    "use strict"

    var App = window.App || {};
    function IssueStore() {
        console.log("Calling IssueStore Function")
        this.data = {};
    }

    //Add:

    IssueStore.prototype.add = function (issue) {
        this.data[issue.id] = issue;
        this.add = ({ id: 101, title: "test", description: "test" });
        this.add = ({ id: 102, title: "test2", description: "test2" });
        this.add = ({ id: 103, title: "test3", description: "test3" });
    };

    //Get:

    IssueStore.prototype.get = function (key) {
        return this.data[key];
    };

    //getAll:

    IssueStore.prototype.getall = function (key) {
        return this.data;
    };

    //Remove:
    IssueStore.prototype.remove = function (id) {
        delete this.data[id];
    };
})