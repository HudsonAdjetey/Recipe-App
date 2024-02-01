/* NOT FOUND */
/* EXPIRY TOKENS */
/* DUPLICATE KEY */

import CustomError from "../utils/customErrorHandler.js"

const devErrors = (res, error) => {
    res.status(error.statusCode).json({
        status: error.statusCode,
        message : error.message ,
        stackTrace: error.stack
    })
}

const prodError = (res, error) => {
    if(error.isOperational) {
        res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        })
    }else {
        res.status(500).json({
            status: 'Error',
            message: "Something went wrong! Please try again later" // TODO: Change this to something more user friendly!
        })
    }
}


const handleExpiredJWT = (error) => {
    return new CustomError('JWT has expired. Please login again!', 401)
}
const validationErrorHandler = (error) => {
    const errors = Object.values(error.errors).map(val => val.message);

    const errorMessage = errors.join('. ')
    return new CustomError(errorMessage, 422)
}

const duplicateKeyErrorHandler = (error) => {
    const name = error.keyValue.name;
    const message = "There's already a recipe with the name" + ' ' + name
    return new CustomError(message.trim(), 400)
}

const Unauthorized = (error)=> {
    const message = 'Invalid Credentials' && error.message
    return new CustomError(message, 401 )
}


const foundError = (error) => {
    return new CustomError('Not found', 404)
}

export const globalErrorHandler = (error, req, res, next) => {
    // Assign a statusCode and status message when empty
    error.statusCode =  error.statusCode || 500
    error.message = error.message || 'Error'

    if(process.env.NODE_ENV === 'development') {
        devErrors(res, error)
    }
    else if (process.env.NODE_ENV === 'production') {
        if(error.name === 'ValidationError') error = validationErrorHandler(error)
        if(error.name === 'TokenExpiredError') error = handleExpiredJWT(error)
        if(error.code === 11000) error = duplicateKeyErrorHandler(error)
        if(error.name ==='castError' && error.kind === 'ObjectId' ) error = foundError(error)
        if(error.name ==='Unauthorized' ) error = Unauthorized(error)

        prodError(res, error)
    }

    next()
}

