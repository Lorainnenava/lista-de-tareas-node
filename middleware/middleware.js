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

//VALIDAR METODO
const verificacion = (req, res, next) => {
  const metodo = req.method;
  if (
    metodo !== "GET" &&
    metodo !== "POST" &&
    metodo !== "PUT" &&
    metodo !== "DELETE"
  ) {
    return res.status(404).json({ msg: "Metodo invalido por favor verifique" });
  } else {
    next();
  }
};

//VALIDAR PARAMETROS
const parametros = (req, res, next) => {
  const estado = req.params.estado;
  if (estado === "completada" || estado === "incompletada") {
    next();
  } else {
    res.status(404).send("Bad request");
  }
};

//VALIDAR URL
const validarUrl = (req, res, next) => {
  const url= req.originalUrl
  const arrayUrl= url.split("/");
  let validate;
  if(arrayUrl.length > 2){
    for(let i=0; i<arrayUrl.length; i++){
      const element= arrayUrl[i];
      if(element === ''){
        validate= true
      }else{
        validate = false
      }
    }
    if(validate){
      return res.status(404).json({msg:'nop'})
    }
    next()
  }
};

module.exports = {
  errores,
  validacion,
  verificacion,
  parametros,
  validarUrl,
};
