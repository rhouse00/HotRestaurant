const path = require("path");


module.exports =(app)=>{

  app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/home.html'))
  });

  app.get('/reservation', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/reservation.html"));
    // res.sendFile(path.join(__dirname, "../form-control.js"));
  });

  app.get('/tables', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/tables.html"))
  });
   
    //other routes..


};
