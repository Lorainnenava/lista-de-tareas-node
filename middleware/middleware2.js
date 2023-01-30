const verificacion = (req, res, next) => {
  const metodo = req.method;
  if (
    metodo !== "GET" ||
    metodo !== "POST" ||
    metodo !== "PUT" ||
    metodo !== "DELETE"
  ) {
    return res.status(404).json({ msg: "Metodo invalido por favor verifique" });
  } else {
    next();
  }
};
module.exports = verificacion;
