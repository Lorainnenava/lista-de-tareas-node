const inquirer = require('inquirer');/*CREAR LISTA INTERACTIVA*/
require('colors');/*COLOCAR COLOR A LA CONSOLA*/

/*MENU*/
const preguntas = [
    {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
    /*OPCIONES*/
        {
        value: "1",
        name: `${"1.".green} Crear tarea`,
        },
        {
        value: "2",
        name: `${"2.".green} Lista de tareas`,
        },
        {
        value: "3",
        name: `${"3.".green} Borrar tareas`,
        },
        {
        value: "0",
        name: `${"0.".green} Salir`,
        },
    ],
},
];
/*ENCABEZADO DEL MENU*/
const inquirerMenu = async () =>{
    console.clear();/*LIMPIAR CONSOLA*/
    console.log("============================".green);
    console.log("   Seleccione una opción".white);
    console.log("============================\n".green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
    /*VA ESPERAR UNA RESPUESTA DE LAS PREGUNTAS Y LO ALMACENA EN UNA VARIABLE*/
    /*DESESTRUCTURAR OPCION*/
}
    /*CONSTANTE ASINCRONA DE PAUSA*/
    const pausa = async () =>{

        const question = [
            {
            type: "input",
            name: "enter",
            message: `Presione ${"ENTER".blue} para continuar`,
            },
        ];

        console.log('\n');
        await inquirer.prompt(question);/*ESPERAR RESPUESTA DE LA QUESTION PARA CONTINUAR*/
    }    

    const leerInput= async (message) =>{
        const question = [{
            type: "input",
            name:'desc',
            message,
            //VALIDAR EL VALOR DEL INPUT
            validate(value){
                value= value.trim();/*ELIMINAR LOS ESPACIOS DEL INPUT*/
                /*SI EL VALUE ES 0 MOSTRARA ERROR*/
                if(value.length === 0){//SI ESTA EN BLANCO
                    return 'Ingresa un valor'
                }//SI NO
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
    }

    /*MENU DE ITEMS PARA BORRAR */
    const menuBorrar = async (tareas=[]) =>{
        const choices= tareas.map ( (tarea, i) => {
            //NUMERO DE LISTA EN BORRAR
            const idx= `${i + 1}.`.green;
            return {
                value: tarea,
                name: `${idx} ${tarea.desc}`
            }
        });
        //AGREGAR CANCELAR AL INICIO DE LAS OPCIONES
        choices.unshift({
            value:'0',
            name: 'Cancelar'
        })
        //OPCIONES EN BORRAR
        const preguntas = [{
            type: 'list',
            name:'id',
            message: 'Borrar',
            choices
        }]
        const {id}= await inquirer.prompt(preguntas);
        return id.id;//MUETSRA EL DATO QUE VAMOS A BORRAR
    };
    /*CONFIRMAR BORRAR*/
    const confirm= async (message) => {
        const question=[
            {
                type:'confirm',
                name:'ok',
                message
            }
        ]
        const {ok}= await inquirer.prompt(question);
        return ok;
    }

/*EXPORTAR MODULOS*/
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    menuBorrar,
    confirm,
}