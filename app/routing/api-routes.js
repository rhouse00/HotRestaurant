var path = require("path");
var waitingList = require("../data/waiting.js");


module.exports = function(app){

    app.get("/api/waiting", function(req, res){
        // res.send("waitlist!");
        res.json(waitingList);
    });

    app.get("/api/current", function(req, res){
        res.send("current!");
    });

};
