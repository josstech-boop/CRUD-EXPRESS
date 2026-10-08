import { Router } from "express";
import { userCreate } from "../Controllers/userController.js";
import { validateUsersMiddleware } from "../Middlewares/validateUsersMilddleware.js";
import { createUserSchema } from "../schemas/usersSchema.js";

const userRoute = Router()

userRoute.post('/',validateUsersMiddleware(createUserSchema), userCreate)

export { userRoute }