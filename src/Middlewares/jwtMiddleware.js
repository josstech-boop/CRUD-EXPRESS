import jwt from 'jsonwebtoken'
export const jwtMiddleware = (req, res, next) => {

    const token = req.headers.authorization.slice(7)

    console.log(token)

    const verify = jwt.verify(token, process.env.JWT_SECRET)

    if(verify){
        next()
    }

    
}

