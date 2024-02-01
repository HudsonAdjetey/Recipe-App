import rateLimit from "express-rate-limit";

const loginLimitter = rateLimit({
    windowMs: 60 * 1000,
    max: 5, //Limit each IP to 5 login requests per `window` per minute
    message: {
        message:'Too many login attempts from thi IP, please try again later after a minute pays'
    },
    handler: (req, res, next, options)=>{
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true, // Return rate limit info in the RateLimit headers
    legacyHeaders: false //Disable the 'X-RateLimit-*' headers
})


export {loginLimitter}