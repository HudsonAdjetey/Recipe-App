import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import UserModel from '../model/userModel.js';
import CustomError from '../utils/customErrorHandler.js';



const protectedRoute = asyncHandler(async(req, res, next) => {
    let token = req.cookies.jwt

    /* validate cookie */
    if(token){
        try {
            /* decode the token */
            const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
            // Assign to a user
            req.user = await UserModel.findById(decodedToken.userID).select('-password')
            next()
        } catch (error) {
            const err = new CustomError('Unauthorized to access route', 401)
            next(err)
        }
    }else {
        /* If no cookies are present then return an error message*/
        next(new CustomError('No token found! please Login', 400 ))
    }
})

export default protectedRoute