const fs = require("fs");//LEER UN ARCHIVO DE TEXTO
let inter = [];
const archivo = "./data.json";//CREAMOS UN ARCHIVO DATA QUE VA ALMACENAR LA INFO

/*FUNCION GUARDAR*/
const saveData = (data) => {
    const dbData = fs.readFileSync(archivo, { encoding: "utf-8" });//LEE EL ARCHIVO
    if (!dbData == "") {
        //TRAER LA DATA EXISTENTE
        const dataObj = JSON.parse(dbData);//LO VA A CONVERTIR
        inter = dataObj;//MI ARRAY VACIO ES IGUAL A LO QUE SE CONVIRTIO
    }
    //GUARDAR AL FINAL
    inter.push(data);//AGREGAR LOS DATOS AL FINAL

    fs.writeFileSync(archivo, JSON.stringify(inter));//LEE MI ARCHIVO INTER Y LO CONVIERTE
    };

    //VER DATA
    const showData = () => {
    if (!fs.existsSync(archivo)) {//PARA VER SI EL ARCHIVO EXISTE
        return null;
    }
    const dbData = fs.readFileSync(archivo, { encoding: "utf-8" });
    const dataObj = JSON.parse(dbData);
    return dataObj;
    };

    //BORRAR DE LA DATA
    const deleteDataDB = (id) => {
    const dbData = fs.readFileSync(archivo, { encoding: "utf-8" });//LEER ARCHIVO
    if (!dbData == "") {//SI ES DIFERENTE A VACIO ESTO VA HACER IGUAL A MI ARRAY(INTER)
        // TRAER LA DATA
        const dataObj = JSON.parse(dbData);
        inter = dataObj;
    }
    const nuevadata = inter.filter((obj) => {//SI NO LO VA ALMACENAR EN UNA NUEVA CONST
    //FILTER RECORRE MI ARRAY Y ME RETORNA UNO NUEVO CON LOS DATOS QUE PASEN LA CONDICION
        return obj.id != id;//SI LOS ID SON DIFERENTES
    });

    fs.writeFileSync(archivo, JSON.stringify(nuevadata));//LEER EL NUEVO ARRAY
    };

    module.exports = {
    saveData,
    showData,
    deleteDataDB,
    };
