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
const id = 3;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)?.salario;


    if (salario) {
        callback(null, salario)
    } else {
        callback(`No existe un salario con el id ${id}`)
    }
}

getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('Error');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            console.log('¡Error!');
            return console.log(err);
        }
        console.log('El empleado', empleado, ' tiene un salario de', salario);
    })
})


