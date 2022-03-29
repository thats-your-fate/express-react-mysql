const express = require("express");
const cors = require("cors");
const app = express();
const Qw = require("./app/controllers/tutorial.controller.js");

const db = require("./app/models");
db.sequelize.sync();
var corsOptions = {
  origin:  "http://localhost:8888"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

require("./app/routes/tutorial.routes")(app);
// set port, listen for requests

require("dotenv").config();


const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
