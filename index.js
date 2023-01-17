const express = require("express");
const app = express();
const port = 8090;
const json = require("./data.json");
const editarTarea = require("./models/list-edit-router");
const agregarTarea = require("./models/list-agregar-router");
const eliminarTarea = require("./models/list-eliminar-router");
const incompletas = require("./models/list-incompletas");
const completadas = require("./models/list-completadas");

app.use("/editar", editarTarea);
app.use("/agregar", agregarTarea);
app.use("/eliminar", eliminarTarea);
app.use("/completadas", completadas);
app.use("/incompletas", incompletas);

app.get("/", function (req, res) {
  res.json(json);
  res.end();
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
module.exports = app;
