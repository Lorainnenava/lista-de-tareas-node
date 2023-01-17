const express = require("express");
const completadas = express.Router();
const json = require("../data.json");

completadas.get("/", express.json(), (req, res) => {
    const completa= json.filter((status) => status.estado === true);
    res.json(completa);
    res.end()
});

module.exports = completadas;
