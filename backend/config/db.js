import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

/* CONNECTION SETUP
    1. DB returns a promise, hence must be treated promisify
*/




const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.CONN_STR)
        console.log('MongoDB connected: ', conn.connection.host )
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB