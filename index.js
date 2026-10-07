import express from 'express';
import studentsRouter from './src/Routes/estudianteRoutes.js';
import cursosRouter from './src/Routes/cursosRoutes.js';
import { logger } from './src/Middlewares/loggerMiddleware.js';
import { errorHandler } from './src/Middlewares/errorHandler.js';

const app = express();

app.use(express.json())

app.use(logger)

app.use('/api/', studentsRouter)
app.use('/cursos/', cursosRouter)

// app.get('/', (req, res) => {
//     res.send('Hola como estas')
// });

// app.get('/api/hello', (request, response) => {
//     response.json({
//         message: 'Hola mundo joselyn'
//     })
// });


app.use(errorHandler)

app.listen(8000, () => {
    console.log('El servidor se esta ejecutando ')
})

// Falta un campo => 400 Peticion incorrecta
// El estudiante que queremos actualizar no existe => 404 Not found

