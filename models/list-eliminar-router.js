const express = require("express");
const eliminar = express.Router();
const fs= require("fs");

//FUNCION DE ELIMINAR
eliminar.delete("/:id", function (req, res) {
    const datos = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const { id } = req.params;
    const borrar = datos.filter((tarea) => tarea.id != id);
    fs.writeFileSync("data.json", JSON.stringify(borrar));
    res.json({ message: `Lista ${id} ha sido eliminada` });
    res.end();
});

module.exports = eliminar;
