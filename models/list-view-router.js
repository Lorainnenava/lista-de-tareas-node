const express = require("express");
const estado = express.Router();
const json = require("../data.json");
const { parametros } = require("../middleware/middleware");


estado.use(express.json())

estado.get("/:estado", parametros, (req, res) => {
  const estado = req.params.estado;
  if (estado === "completada") {
    const completa = json.filter((status) => status.estado === true);
    res.json(completa);
  }
  if (estado === "incompletada") {
    const incompleta = json.filter((i) => i.estado === false);
    res.json(incompleta);
  }
  res.end();
});

module.exports = estado;
