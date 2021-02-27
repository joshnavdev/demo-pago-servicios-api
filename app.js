const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes");
const app = express();

// Conexion mongoDB
const url =
  "mongodb+srv://joshua:carlospunk@demo-pago-servicios.zrh2f.mongodb.net/pago_servicios?authSource=admin&replicaSet=atlas-41un6i-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose
  .connect(url)
  .then(() => {
    console.log("Se conecto a la BD");
  })
  .catch((err) => {
    console.log("Hubo un error de conexion", err);
    process.exit();
  });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(router);

const fakeData = require("./faker");

app.post("/llenarDatabase", fakeData.createData);

app.listen(8000, () => {
  console.log("Conectado!");
});
