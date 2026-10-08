const userCreate = (req, res) => {

    res.status(201).json({
        message: `Se creo el usuario!! `
    })
}



export { userCreate }