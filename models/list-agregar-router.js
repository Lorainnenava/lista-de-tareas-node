const express = require("express");
const agregar = express.Router();
const fs = require("fs");
const json = require("../data.json");
const {errores, validacion} = require("../middleware/middleware");
const jwt = require("jsonwebtoken");
require("dotenv").config();

agregar.use(express.json());

const users = [{ name: "lorainne" }, { name: "Angel" }];

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

//LOGIN
agregar.post("/login", errores, function (req, res) {
  const userInfo = users.map((user) => {
    if (user.name == req.body.name) {
      return user;
    }
  });
  if (userInfo.length === 0) {
    res.status(401).send({ error: "Invalid user name or password" });
  } else {
    const token = jwt.sign(userInfo[0], process.env.SECRET_KEY, {
      algorithm: "HS256",
    });

    res.json({ token });
  }
});

agregar.get("/proteger",function (req, res) {
  const token = req.header("Authorization");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    res.send("autenticado");
  } catch (error) {
    res.json({ error });
  }
});

module.exports = agregar;
