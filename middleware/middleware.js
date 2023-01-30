//SOLICITUD DE POST CON EL CUERPO VACIO
const errores = (req, res, next) => {
  const method = req.method;
  if (method === "POST" || method === "PUT") {
    if (Object.values(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "No se pueden ingresar datos vacíos" });
    }
    next();
  }
};

//SOLICITUD DE DATOS INVALIDOS
const validacion = (req, res, next) => {
  const { body } = req;
  if (Object.keys(body).length < 3) {
    return res.status(404).json({ msg: "Datos invalidos" });
  }
  next();
};

module.exports = {
  errores,
  validacion,
};
