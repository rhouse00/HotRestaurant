const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");



// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Sets up the Express app to handle data parsing

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(PORT, ()=> {
  console.log("App listening on PORT " + PORT);
});
