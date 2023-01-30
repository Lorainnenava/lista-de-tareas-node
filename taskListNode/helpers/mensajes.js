require ('colors');

const mostrarMenu = ()=>{

    return new Promise(resolve =>{

        /*MENU DE OPCIONES*/
        console.log('============================'.green);
        console.log('   Seleccione una opción'.green);
        console.log("============================\n".green);
        /*OPCIONES*/
        console.log(`${"1.".green} Crear tareas`);
        console.log(`${"2.".green} Lista de tareas`);
        console.log(`${"3.".green} tareas completadas`);
        console.log(`${"4.".green} Tareas pendientes`);
        console.log(`${"5.".green} Completar tarea(s)`);
        console.log(`${"6.".green} Borrar tarea`);
        console.log(`${"0.".green} Salir\n`);
    
        console.log("============================".green);
        /*FINALIZA MENU*/
    
        const readline = require('readline').createInterface({
            input: process.stdin,/*INPUT DONDE LA CONSOLA ESPERA ALGO DEL USUARIO*/
            output: process.stdout/*MENSAJE CUANDO ESTOY ESPERANDO ALGO*/
        });
    
        readline.question('Seleccione una opción: ', (opt) => {(opt);
        readline.close(); 
        resolve(opt);
        })
    })

    }

    const pausa = () =>{

    return new Promise(resolve =>{

        const readline = require("readline").createInterface({
            input: process.stdin, /*INPUT DONDE LA CONSOLA ESPERA ALGO DEL USUARIO*/
            output: process.stdout /*MENSAJE CUANDO ESTOY ESPERANDO ALGO*/
        });
    
        readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    });
    }

module.exports={
    mostrarMenu,
    pausa
}