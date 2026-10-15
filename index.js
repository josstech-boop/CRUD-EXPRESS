import express from 'express';
import studentsRouter from './src/Routes/estudianteRoutes.js';
import cursosRouter from './src/Routes/cursosRoutes.js';
import { logger } from './src/Middlewares/loggerMiddleware.js';
import { errorHandler } from './src/Middlewares/errorHandler.js';
import { userRoute } from './src/Routes/userRoutes.js';
import { pool } from './src/Config/database.js';
import { clientesRouter } from './src/Routes/clientRoutes.js';
import { loginRouter } from './src/Routes/loginRouter.js';
import { jwtMiddleware } from './src/Middlewares/jwtMiddleware.js';

const app = express();

app.use(express.json())

app.use(logger)

app.use('/api/', studentsRouter)
app.use('/cursos/', cursosRouter)

app.use('/users/', userRoute)

app.use('/clientes',jwtMiddleware, clientesRouter)

app.use('/api/login', loginRouter)

// app.get('/', (req, res) => {
//     res.send('Hola como estas')
// });

// app.get('/api/hello', (request, response) => {
//     response.json({
//         message: 'Hola mundo joselyn'
//     })
// });


app.use(errorHandler)

///Prueba de conexion
try {

    await pool.query('Select 1')

    app.listen(process.env.PORT, () => {
        console.log('El servidor se esta ejecutando ')
    })
    console.log('Postgres SQL Conectado')
} catch (error) {
    console.log('Error al conectar Postgress')
    await pool.end();

}


