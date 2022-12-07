const { saveData, deleteDataDB, showData } = require("../helpers/db");
const Tarea= require('./tarea');

    /*CLASE*/
    class Tareas {
        /*PROPIEDAD PARA LISTAR TAREA*/
        _listado = {};

        /*GET PARA RETORNAR UN NUEVO ARREGLO*/
        get listadoArr() {
            /* ARREGLO LISTADO DE TAREAS*/
            const listado = [];
            Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key];

            /*ENVIAR TAREA AL ARRAY*/
            listado.push(tarea);
            });

            return listado;
        }

        constructor() {
            this._Listado = {};
        }

        crearTarea(desc = " ") {
            const tarea = new Tarea(desc);
            /*DESESTRUCTURAR EL ID DE LA TAREA*/
            this._listado[tarea.id] = tarea;
            console.log(this._listado[tarea.id]);
            /*ESTO VA A IR ALMACENANDO TODO LO DEL LISTADO EN LA BASE*/
            saveData(this._listado[tarea.id]);
        }

        mostrarTareas() {
            const dataObj = showData();
            let cont = 1;
            let lastfecha = " ";
            for (const property in dataObj) {
            const { desc, fecha } = dataObj[property];

            lastfecha != fecha
                ? console.log(
                    `${"------------------------------------------------------".magenta}`)
                : false;
            console.log(
                `${cont.toString().blue}${")".blue}  ${desc} ${
                "hecho".green
                } el : ${fecha}`
            );
            cont++;
            lastfecha = fecha;
            }
        }
        traerDataFromDB() {
            // devuelve un array de la data , para luego mandarlo a menuquirer y se graficada para borrar

            const dataObj = showData();
            let array = [];

            for (const property in dataObj) {
            array[property] = dataObj[property];
            }
            return array;
        }
        deleteData(id) {
            deleteDataDB(id);
        }
        }
module.exports = Tareas;
