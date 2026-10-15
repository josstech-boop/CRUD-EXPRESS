import { Router } from "express";
import { loginController } from "../Controllers/loginControoller.js";
import { userCreate } from "../Controllers/userController.js";

const loginRouter = Router()

loginRouter.post('/', loginController)

export {loginRouter }

