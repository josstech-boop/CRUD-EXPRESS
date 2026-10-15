import bcrypt from 'bcrypt'
import { crearUsuario } from '../repositories/usuariosRepositorio.js'

const userCreate = async (req, res) => {

    const { id, nombre, email, password } = req.body

    const pass = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALTS_ROUND))

    console.log(pass)

    const result = await crearUsuario(nombre, email, pass)

    console.log('HOlaaaaaaaaa')
    console.log(result)

    res.status(201).json({
        message: `Se creo el usuario!! `, 
        data: result[0]
    })
}



export { userCreate }
// {
//     "nombre": "eva",
//     "email": "eva@gmail.com",
//     "password": "holaevamaria"
// }

// {
//     "nombre": "eva",
//     "email": "joel@gmail.com",
//     "password": "joelhola123"
// }