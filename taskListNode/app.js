require("colors");
const {
  inquirerMenu,
  pausa,
  leerInput,
  menuBorrar,
  confirm,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = " ";
  const tareas = new Tareas(); /*INSTANCIA DE LAS TAREAS*/

  do {
    opt = await inquirerMenu(); /*IMPRIME EL MENU Y RETORNA UNA OPCION*/

    switch (opt) {
      /*CREAR TAREA*/
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      /*LISTA DE TAREAS*/
      case "2":
        console.clear();
        tareas.mostrarTareas(); //MUESTRA LAS TAREAS
        break;
      /*BORRAR TAREAS*/
      case "3":
        const array = tareas.traerDataFromDB();
        const deleteID = await menuBorrar(array); //ESPERA RESPUESTA DEL MENU BORRAR
        const ok = await confirm(
          `'¿ Desea ${"borrar".red} la ${"tarea".green}? '`
        ); //MENSAJE DE CONFIRMACION
        ok ? tareas.deleteData(deleteID) : false; //ELIMINA
        break;
      /*SALIR*/
      case "0":
        break;
    }

    await pausa(); /*ESPERA LA PAUSA PARA CONTINUAR*/
  } while (opt !== "0");
};
main();
