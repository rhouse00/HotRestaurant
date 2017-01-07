const path = require("path");

var tableQueue = [];

module.exports = (app)=>{

    app.get("/api/waiting", (req, res)=>{
        res.send("waitlist!");
    });

    app.get("/api/current", (req, res)=>{
        res.send("current!");
    });
    
       app.get("/api/clear", (req, res)=>{
        res.send("clearing!");
    });
    app.post("/api/waiting", (req, res)=>{
        var newTable = req.body;
		tableQueue.push(newTable);
		res.json(newTable);
    });

};
