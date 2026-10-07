const validateMiddleware = (req, res, next) => {

    const { name } = req.body

    if (!name) {
        return res.status(422).json({
            message: 'El nombre es obligatorio'
        })
    }

    next()
}

export {validateMiddleware}