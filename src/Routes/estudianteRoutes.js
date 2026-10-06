import { Router } from "express";
import {
    crearEstudiante,
    editarEstudiante,
    eliminarEstudiante,
    mostrarEstudiantes,
    mostrarUnEstudiante
} from '../Controllers/estudianteController.js';


const router = Router()

router.get('/ver', mostrarEstudiantes)

router.get('/verEstudiante/:id', mostrarUnEstudiante)

router.post('/crear', crearEstudiante)

router.put('/estudiantes/:id/editar', editarEstudiante)

router.delete('/eliminar/:id', eliminarEstudiante)

export default router 