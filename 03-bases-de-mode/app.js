'use strict';
const colors = require('colors');
const { crearArchivo } = require('./helpers/promise-mult.js');
const argv = require('./config/yargs')
console.clear();
//Parte del curso donde se dividen los argumentos con defragmentación
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(base);
///////
//console.log(process.argv);
/**Salida */
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\lalo_\\Documents\\Metas\\nodejs\\de0AExpertoComprado\\03-bases-de-mode\\app'
// // ]
// ////////////////
// console.log(argv);

// console.log('base: yargs', argv.base);
// console.log('base: yargs', argv.listar);

// let base = 9;
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.red))
    .catch(err => console.log(err));