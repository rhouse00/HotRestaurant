// DEPENDENCIES // 
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//ROUTES // 
// =============================================================
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/home.html'))
});

app.get('/reservation', (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/reservation.html"))
});

app.get('/tables', (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/tables.html"))
});

app.listen(PORT, ()=> {
  console.log(`Server listening on ${PORT}`);
});