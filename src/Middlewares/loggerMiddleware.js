const logger = (req, res, next) => {
    
    console.log(`Metodos: ${req.method} `)
    console.log(`URL ${req.url}`)
    console.log('Pasaste por un Middleware!!!...');

    next();

};

export { logger }
