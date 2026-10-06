let cursos = []

//Mostrar todos los cursos
const verCursos = (req, res) => {

    res.status(200).json({
        data: {
            cursos
        }
    })

}
//Ver curso
const verCurso = (req, res) => {

    const curso = cursos.find(item => item.id == req.params.id)

    res.status(200).json({
        curso
    })

}

//Crear curso
const crearCurso = (req, res) => {
    const { id, name, cantidad } = req.body
    cursos.push({ id, name, cantidad })
    res.status(201).json(
        {
            message: 'Curso creado con exito',
            data: { id, name, cantidad }
        }
    )
}


//Editar cursos
const editarCurso = (req, res) => {

    const { name } = req.body

    let cursoEditar = cursos.find(item => item.id == req.params.id)
    cursoEditar.name = name

    console.log(cursoEditar)

    res.status(200).json({
        message: 'Curso editado!!!',
        data: {
            cursoEditar
        }
    })

}

//Eliminar Curso
const eliminarCurso = (req, res) => {

    const id = req.params.id

    cursos = cursos.filter(item => item.id != id)

    res.status(200).json({
        message: `Curso Eliminado id: ${id} `
    })

}


export {
    crearCurso,
    verCursos,
    editarCurso,
    eliminarCurso,
    verCurso
}