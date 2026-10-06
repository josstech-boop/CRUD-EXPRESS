import { Router } from "express";
import { crearCurso, editarCurso, eliminarCurso, verCurso, verCursos } from "../Controllers/cursosController.js";


const router = Router()

router.get('/ver', verCursos)

router.post('/crear', crearCurso)

router.get('/:id', verCurso)

router.put('/:id/editar', editarCurso)

router.delete('/eliminar/:id', eliminarCurso)

export default router 