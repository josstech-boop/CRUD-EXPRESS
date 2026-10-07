const agregarColegio = (req, res, next) => {
    
    req.body.school = 'MangoChango Academy'

    next()
}

export { agregarColegio }