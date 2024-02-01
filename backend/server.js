import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 5060
import dbConnect from './config/db.js'
import router from './routes/usersRoutes.js';
import { globalErrorHandler } from './controllers/errorHandlerController.js';
import cookieParser from 'cookie-parser';
import recipeRouter from './routes/recipeRoute.js';

import cors from 'cors'
import { loginLimitter } from './middleware/loginLimiter.js';

dbConnect()

const app = express();
app.use(cors())

// app.use(cors({
//     origin: ['http://localhost:3001', "https://recipesApp.vercel.app"],
//     methods: 'GET, HEAD, PUT, POST, DELETE',
//     credentials: true
// }))

/* const whiteList = ['http://localhost:3001',]
const corsOptions = {
    origin:(origin, callback)=>{
        if(whiteList.indexOf(origin) !==-1 ) {
            return callback (null ,true);
        }else {
            return callback("Not allowed by CORS");
        }
    },
    
} */



/* set the body receiver middleware  */
app.use(express.json())
app.use(cookieParser())
/* router */
// import routes file and use it in this route
app.use("/recipe/auth", router)
app.use("/recipe/", recipeRouter)

app.use(globalErrorHandler)


app.listen(port, ()=> console.log(`Server running on port ${port}`))

// how do I use the cookies from the backend in frontend(react js)?