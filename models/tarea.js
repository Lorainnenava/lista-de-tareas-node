const { v4: id } = require("uuid");/*CREA UN ID*/
const moment = require("moment");
/*CLASS TAREA*/
class Tarea {
    id = " ";
    desc = " ";
    fecha = " "

    constructor(desc) {
    this.id = id();
    this.desc = desc;
    this.fecha = moment(). format('dddd Do MMMM')
}
}
module.exports = Tarea;
