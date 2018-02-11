const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8081;


const app = express();
app.use(methodOverride('_method'));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function(){
    console.log('Listenig on Port: ' + port)
});
