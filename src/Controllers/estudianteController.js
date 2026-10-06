//Crud estudiantes
let estudiantes = []

const crearEstudiante = (req, res) => {
    const { id, name } = req.body;
    estudiantes.push({ id, name })

    res.status(201).json({
        message: "Estudiante creado",
        data: {
            id,
            name
        }
    })
}
//Ver todos los estudiantes
const mostrarEstudiantes = (req, res) => {
    res.status(200).json({
        data: {
            estudiantes
        }
    })
}

//Ver solo un estudiante
const mostrarUnEstudiante = (req, res) => {
    const estudiante = estudiantes.find(estudiante => estudiante.id == req.params.id)

    res.status(200).json({
        data: estudiante
    });
}


const eliminarEstudiante = (req, res) => {
    const id = req.params.id
    estudiantes = estudiantes.filter(estudiante => estudiante.id != id)

    res.status(200).json({
        message: `Se Elimino estudiante id:  ${id}`
    })

}

const editarEstudiante = (req, res) => {
    const estudiante = estudiantes.find(estudiante => estudiante.id == req.params.id)
    const { name } = req.body;
    estudiante.name = name;

    res.status(200).json({
        data: estudiante,
        message: 'Estudiante editado exitosamente'
    })

}

export {
    mostrarEstudiantes,
    mostrarUnEstudiante,
    eliminarEstudiante,
    editarEstudiante,
    crearEstudiante
}