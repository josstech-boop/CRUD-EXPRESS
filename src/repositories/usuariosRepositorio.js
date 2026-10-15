import { pool } from "../Config/database.js";

export const buscarUsuario = async (email) => {

    try {
        const result = await pool.query('select * from usuarios where email= $1', [email])
        return result.rows[0]

    } catch (error) {
        throw new Error('Error al conectar a la base de datos')
    }
};


export const crearUsuario = async (nombre, email, password) => {

    console.log('SE va crear en bd')
    console.log(password)

    try {
        const result = await pool.query('insert into usuarios(nombre, email, password) values ( $1,$2 ,$3 ) returning *', [nombre, email, password])
        return result.rows

    } catch (error) {
        throw new Error('Error al conectar a la base de datos')
    }
};


