var path = require("path");


module.exports = function(app){

    app.get('/tables', function(req, res){
          // res.sendFile(path.join(__dirname, "/public/survey.html"));
          res.send("../public/tables.html");
    });

    app.get('/reservations', function(req, res){
          // res.sendFile(path.join(__dirname, "/public/survey.html"));
          res.send("../public/reservation.html");
    });

    app.use(function(req, res){
      res.send("/public/home.html");
    });
    //other routes..


};
