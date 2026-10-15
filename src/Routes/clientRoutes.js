import { Router } from "express";
import { getClient, getclientes } from "../Controllers/clientController.js";

const clientesRouter = Router()

clientesRouter.get('/', getclientes)
clientesRouter.get('/:id', getClient)

export {clientesRouter}