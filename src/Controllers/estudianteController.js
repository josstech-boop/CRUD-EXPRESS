//Crud estudiantes
let estudiantes = []

const crearEstudiante = (req, res, next) => {

    try {

        const { id, name, school } = req.body;
        estudiantes.push({ id, name, school })

        res.status(201).json({
            message: "Estudiante creado",
            data: {
                id,
                name
            }
        })
    } catch (error) {

        next(error)

    }
}
//Ver todos los estudiantes
const mostrarEstudiantes = async (req, res) => {
    throw new Error('Algo salio mal ')

    res.json({
        message:'Estudiantes'
    })

    // try{
    // res.status(200).json({
    //     data: {
    //         estudiantes
    //     }
    // })
    // }catch(error){
    //     res.status(500).json({message: 'Error interno del servidor'})
    // }



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