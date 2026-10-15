import { da, id } from "zod/v4/locales"
import { pool } from "../Config/database.js"
import { getAllClientes, getCliente } from "../repositories/clientRepositoty.js"

const getclientes = async (req, res) => {
    const clientes = await getAllClientes()

    res.status(200).json({
        data: clientes
    })
}

const getClient = async (req, res )=>{
    const id = req.params.id
    const cliente = await getCliente(Number(id))

    res.status(200).json({
        data: cliente
    })
}

export { getclientes, getClient }