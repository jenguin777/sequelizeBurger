var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8085;

var app = express();
// go use index.js to fetch all models (all .js files) in the models folder and put them in the db.
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);



db.sequelize.sync({
  logging: console.log
}).then(function(){
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  });
});
