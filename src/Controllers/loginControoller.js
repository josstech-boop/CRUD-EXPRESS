import { buscarUsuario } from "../repositories/usuariosRepositorio.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const loginController = async (req, res) => {

    const { email, password } = req.body

    // const pass = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALTS_ROUND))

    const usuario = await buscarUsuario(email)

    if (usuario) {

        const check = await bcrypt.compare(password, usuario.password)

        if (check) {
            const token = jwt.sign(
                { role: "admin", name: usuario.nombre }, 
                process.env.JWT_SECRET,
                {
                    subject: usuario.id.toString(),
                    expiresIn: "1h",
                    algorithm: "HS256"
                }
            );

            res.status(200).json({ message: "Credenciales Correctas", token })

        } else {
            res.status(401).json({ message: "Credenciales Incorrectas" })
        }

    } else {
        res.status(401).json({ message: 'Email no registrado ' })
    }
}

export { loginController }