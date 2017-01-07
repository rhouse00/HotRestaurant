var path = require("path");


module.exports = function(app){

    app.get("/api/waiting", function(req, res){
        res.send("waitlist!");
    });

    app.get("/api/current", function(req, res){
        res.send("current!");
    });

};
