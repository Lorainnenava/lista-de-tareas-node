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

        //MOSTRAR LA TAREA
        mostrarTareas() {
            const dataObj = showData();//MOSTRAR LO QUE HAY EN LA DATA
            let cont = 1;//ENUMERAR LAS TAREAS
            let lastfecha = " ";
            for (const property in dataObj) {//RECORRE CADA ITEM EN LA DATA
            const { desc, fecha } = dataObj[property];

            lastfecha != fecha//SI LAS FECHAS SON DIFERENTES LAS SEPARA
                ? console.log(
                    `${"------------------------------------------------------".blue}`)
                : false;
            console.log(//SI SON IGUALES LAS VA A NUMERAR
                `${cont.toString().blue} ${")".blue} ${desc} ${"hecho".green} el : ${fecha}`);
            cont++;//EL CONTADOR SE VAYA AUMENTANDO
            lastfecha = fecha;//LA FECHA
            }
        }

        traerDataFromDB() {
            //DEVUELVE UN ARRAY DE LA DATA 
            const dataObj = showData();
            let array = [];

            for (const property in dataObj) {
            array[property] = dataObj[property];
            }
            return array;
        }
        deleteData(id) {
            deleteDataDB(id);//ELIMINA DE LA DATA
        }
        }
module.exports = Tareas;
