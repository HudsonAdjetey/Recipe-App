/* GENERATING A TOKEN then passed onto the COOKIE */
/* 
    -> Attain the secret key from the .env === process.env.SECRET_KEY
    -> # 
*/

import jwt from "jsonwebtoken"

const generatedToken = (res, userID) => {
    const token = jwt.sign({ userID }, process.env.ACCESS_SECRET_KEY, {
        expiresIn: '2h' // expires in an hour
    })

    res.cookie('jwt', token, {
        httpOnly : true,
        secure : process.env.NODE_ENV === 'production' ? true : false,
        maxAge: 2 * 3600 * 1000
    })
}

export default generatedToken