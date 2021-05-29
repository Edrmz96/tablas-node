const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Número base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla de multipicar por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Límite de la tabla de multilplicar',
        demandOption: true
    })
    .check((argv, options) => {
        //console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


module.exports = argv;