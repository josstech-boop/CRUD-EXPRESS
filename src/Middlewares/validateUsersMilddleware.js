import z from "zod"

const validateUsersMiddleware = (schema) => {
    return (req, res, next) => {

        const result = schema.safeParse(req.body)

        console.log('paso en el middleware de crear')
        console.log(result.success)

        if (!result.success) {
            //const errors = z.flattenError(result.error)
            return res.status(400).json({
                message: 'Error de validacion',

                errors: result.error.issues.map(item => item.message)
            })
        }
        req.body = result.data

        next()
    }
}

export { validateUsersMiddleware }

// {
//     "nombre": "eva",
//     "email": "eva1@gmail.com",
//     "password": "osoeva1234568"
// }