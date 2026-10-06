import express from 'express';
import studentsRouter from './src/Routes/estudianteRoutes.js';
import cursosRouter from './src/Routes/cursosRoutes.js';

const app = express();

app.use(express.json())
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


app.listen(8000, () => {
    console.log('El servidor se esta ejecutando ')
})

