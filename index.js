const express = require("express");
const app = express();
const port = 8090;
const fs = require("fs");
const json = require("./data.json");

app.get("/", function (req, res) {
  res.json(json);
  res.end();
});

app.post("/", express.json(), function (req, res) {
  const datos = req.body;
  json.push(datos);
  fs.writeFileSync("data.json", JSON.stringify(json), function (err) {
    if (err) throw err;
    console.log("updated");
  });
  res.send("recibido");
  res.end();
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
module.exports = app;
