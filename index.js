const express = require("express");
const app = express();
const port = 8090;
const json = require("./data.json");
const editarTarea = require("./models/list-edit-router");
const agregarTarea = require("./models/list-agregar-router");
const eliminarTarea = require("./models/list-eliminar-router");
const estado = require("./models/list-view-router");
const verificacion= require('./middleware/middleware2')


app.use(verificacion)
app.use("/editar", editarTarea);
app.use("/agregar", agregarTarea);
app.use("/eliminar", eliminarTarea);
app.use("/estado", estado);


app.get("/", function (req, res) {
  res.json(json);
  res.end();
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
module.exports = app;
