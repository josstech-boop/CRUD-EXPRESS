import { Router } from "express";
import { userCreate } from "../Controllers/userController.js";
import { validateUsersMiddleware } from "../Middlewares/validateUsersMilddleware.js";
import { createUserSchema } from "../schemas/usersSchema.js";

const userRoute = Router()

userRoute.post('/', userCreate)

export { userRoute }

// {
//     "nombre": "suce",
//     "email": "suce@gmail.com",
//     "password": "sucelysucely"
// }


// {
//     "email": "prueba@gmail.com",
//     "password": "pruebajoss"
// }
