const toUpperCase = (req, res, next) => {

    //if (req.url == '/api/crear' && req.method == 'POST') {
        req.body['name'] = req.body['name'].toUpperCase()
    //}

    next()

};

export {toUpperCase}