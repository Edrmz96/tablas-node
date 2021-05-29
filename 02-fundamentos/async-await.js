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

const getInfoUsuario = async () => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado : ${empleado} es de $ ${salario}`
    }
    catch (error) {
        throw error;
    }
}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));