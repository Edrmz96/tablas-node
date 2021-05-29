'use strict'
//callback es una función que se va a ejecutar en cierto punto
//Es una función que se manda como argumento a otra función
// setTimeout(function() {
//     console.log('Hola mundo');
// }, 1000)


// setTimeout(() => {
//     console.log('Hola mundo, con función flecha');
// }, 1000)

const getUsuarioByID = (id, callback) => {
    const user = {
        id,
        nombre: 'Eduardo'
    }
    setTimeout(() => {
        callback(user);
    }, 1500)

}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});