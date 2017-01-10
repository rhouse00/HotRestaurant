const path = require("path");
const waiting = require("../data/waiting");
const setData = require('../firebase');


module.exports =(app)=>{


    app.get("/api/tables", (req, res)=>{
        
        res.json(waiting);
    });

    app.get("/api/current", (req, res)=>{
        res.send("current!");
    });
    
       app.get("/api/clear", (req, res)=>{
        res.send("clearing!");
    });

     app.post("/api/waiting", (req, res)=> {
       var reservation = req.body;
       reservation.routeName = reservation.name.replace(/\s+/g, "").toLowerCase();
       waiting.push(reservation);
       res.json(reservation);
       setData(reservation);
     
});

};
