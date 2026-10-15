import { pool } from "../Config/database.js";

const getAllClientes = async () => {
    try {
        const result = await pool.query('Select * from clientes')
        return result.rows

    } catch (error) {
        throw new Error('Hubo un error al intentar conectar con la DB')
    }

}

const getCliente = async (id) => {

    try {
        const result = await pool.query(`
            select * from clientes 
            where cliente_id = ${id}
            `)

        return result.rows

    } catch (error) {
        throw new Error(`Hubo un error al intentar conectar con la DB al buscar el cliente ${id}`)


    }
}

export { getAllClientes, getCliente }

