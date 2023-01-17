const express = require("express");
const incompletas = express.Router();
const json = require("../data.json");

incompletas.get("/", express.json(), function (req, res) {
    const incompleta = json.filter((i) =>i.estado === false);
    res.json(incompleta)
    res.end();
});

module.exports = incompletas;
