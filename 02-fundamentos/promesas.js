'use strict';

const empleados = [{
    id: 1,
    nombre: 'Eduardo'
},
{
    id: 2,
    nombre: 'Chiquitinngui'
},
{
    id: 3,
    nombre: 'Taquito'
}
]

const salarios = [{
    id: 1,
    salario: 1500
}, {
    id: 2,
    salario: 2000
}]
//Resolve es lo que se manda a llamar cuando todo se hace correctamente
//Reject es lo que se ejecuta si sucede un error

const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    return new Promise((resolve, reject) => {
        if (empleado) {
            resolve(empleado);
        }
        else {
            reject(`No existe el empleado con id ${id}`);
        }

    })
}

const getSalario = (id => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        //Usando if simplificado
        (salario)
            ? resolve(salario)
            : reject(`No existe el salario con id ${id}`)


    })
})

const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empleado: ', empleado, ' tiene un salario de: $', salario)

            }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));