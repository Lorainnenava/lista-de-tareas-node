const express = require("express");
const estado = express.Router();
const json = require("../data.json");

estado.use(express.json())

estado.get("/&:completada",(req, res) => {
  const completada = req.params;
  if(req.params == completada){
      const completa = json.filter((status) => status.estado === true);
      res.json(completa);
  }
  res.end();
});

estado.get("/:incompletada", function (req, res) {
  const incompletada = req.params;
  if(req.params ==incompletada){
      const incompleta = json.filter((i) => i.estado === false);
      res.json(incompleta);
  }
  res.end();
});

module.exports = estado;
