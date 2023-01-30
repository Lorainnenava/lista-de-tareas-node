const express = require("express");
const agregar = express.Router();
const fs = require("fs");
const json = require("../data.json");
const {errores, validacion} = require("../middleware/middleware");


agregar.use(express.json());
//FUNCION DE AGREGAR
agregar.post("/",errores, validacion,function (req, res) {
  const datos = req.body;
  json.push(datos);
  fs.writeFileSync("data.json", JSON.stringify(json), function (err) {
    if (err) throw err;
    console.log("updated");
  });
  res.send("recibido");
  res.end();
});

module.exports = agregar;
