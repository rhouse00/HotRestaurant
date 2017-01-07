const path = require("path");


module.exports = (app)=>{

    app.get("/api/waiting", (req, res)=>{
        res.send("waitlist!");
    });

    app.get("/api/current", (req, res)=>{
        res.send("current!");
    });

};
