import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if(!authHeader?.startsWith('Bearer')){
        return res.status(401).json({message: "Unauthorized"})
    }
}

export default verifyToken;