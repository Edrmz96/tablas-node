'use strict'
const fs = require('fs');
//promesa sin uso de reject

let crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('================');
        console.log(`Tabla del: ${base}`);
        console.log('================');
        let salida = '';

        for (let x = 1; x <= 10; x++) {
            salida += `${base} x ${x} = ${base * x}\n`;
        }
        fs.writeFileSync(`Tabla-${base}.txt`, salida)

        resolve(`Tabla-${base}.txt`);
    })
}

module.exports = {
    crearArchivo
}