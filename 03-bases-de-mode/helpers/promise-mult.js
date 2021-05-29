'use strict'
const fs = require('fs');
const colors = require('colors');
//promesa sin uso de reject

let crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '';

        for (let x = 1; x <= hasta; x++) {
            salida += `${base} x ${x} = ${base * x}\n`;
        }
        fs.writeFileSync(`./archivos/Tabla-${base}.txt`, salida)
        if (listar) {
            console.log('================'.green);
            console.log(`Tabla del: ${base}`.red);
            console.log(`Hasta ${hasta}`.red);
            console.log('================'.blue);
            console.log(salida);
        }

        return `Tabla-${base}.txt`.rainbow;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}