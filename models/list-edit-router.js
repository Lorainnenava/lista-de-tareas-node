const express = require("express");
const editarTarea = express.Router();
const fs = require("fs");

editarTarea.put("/:id", express.json(),function (req, res) {
    const datos = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const { id } = req.params;
    datos.forEach((task) => {
        if (task.id == id) {
            task.desc = req.body.desc;
            task.fecha = req.body.fecha;
            task.estado = req.body.estado;
        }
    })
    fs.writeFileSync("data.json", JSON.stringify(datos));
    res.json({ message: `Tarea ${id} ha sido actualizada` });
    res.end();
});

module.exports = editarTarea;