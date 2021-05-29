'use strict';

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracón',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


//Desestructuración común
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
////////////////
/*
Destructuración 
*/
// const { nombre, apellido, poder, edad = 24 } = deadpool;
// console.log(nombre, apellido, poder, edad);
//////////////
/*
Destructuración con función
*/
// function imprimeHeroe(heroe) {
//     const { nombre, apellido, poder, edad = 24 } = deadpool;
//     console.log(nombre, apellido, poder, edad);
// }
// imprimeHeroe(deadpool);
//////////////////////////////////
/**
Destructuración en los argumentos 
de la función*/
function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);