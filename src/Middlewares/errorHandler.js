const errorHandler = (error, req, res, next) => {
    console.log(error)
    res.status(500).json({
        message: 'Hubo un error, contacte al admin'
    })
}

export { errorHandler }