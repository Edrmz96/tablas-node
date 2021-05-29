'use strict'
const fs = require('fs');
const crearArchivo = (base = 5, bandera) => {
    let salida = '';
    for (let x = 1; x <= 10; x++) {
        salida += `${base} x ${x} = ${base * x}\n`;
    }
    // file system, write
    // fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
    //     if (err) throw err;

    //     console.log(`Tabla del ${base}.txt creada`);
    // })

    //file system fwrite asynchronus
    fs.writeFileSync(`Tabla-${base}.txt`, salida)

    if (bandera) {
        console.log('================');
        console.log(`Tabla del: ${base}`);
        console.log('================');
        console.log(salida);
    }


    console.log(`Archivo "Tabla-${base}.txt" creado`);
}

module.exports = {
    crearArchivo
}