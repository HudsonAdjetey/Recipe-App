/* **The requests made to the servers are done asynchronously */
/*  1. Get the UserModel
    2. import the generated token for the login and the register
    3. Hash and compare passwords using the generated middleware 'pre' by the schema model
    4. Create a method for password matching
    5. Import cookie-parser in the server to parse the generated cookie
    6. Logout request should destroy the cookie stored in the local storage and the cookie eg. res.cookie('namegiven', '');
*/

import asyncHandler from 'express-async-handler'
import UserModel  from '../model/userModel.js'
import CustomError from '../utils/customErrorHandler.js'
import generatedToken from '../utils/generateToken.js'

import jwt from "jsonwebtoken"
/* @desc - Register a user '/recipe/auth' POST */
// access Public

const registerUser = asyncHandler(async(req, res, next)=> {

    const { name, email, password } = req.body

    const existingUser = await UserModel.findOne({ email })
    if(existingUser) {
        const err = new CustomError('User already exist', 400)
        return next(err)
    }
    const newUser = await  UserModel.create({ name, email, password })
    if(newUser) {
        generatedToken(res, newUser._id)
        res.status(201).json({
            _id:newUser._id,
            name: newUser.name,
            email: newUser.email
        })
    }else {
        res.status(400)
    }

})

/* @desc - Register a user '/recipe/auth' POST */
// access Public

const loginUser = asyncHandler(async(req, res, next)=> {
    // Get details from the body
    const { email, password } = req.body
    // check if the user exist in the db
    // If not throw an error with status code of 400 (bad request)
    const user = await UserModel.findOne({email})
    if(user && (await user.matchPassword(password) )) {
        generatedToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            email: user.email,
            name: user.name
        })
    }else {
        // Throwing custom errors and passing it to express middleware for handling them
        if(!user || !user.active) {
            const err = new CustomError('Invalid Credentials', 401)
            return next(err)
        }
    }
} )

const refresh = asyncHandler(async(req, res)=>{
    const cookies = req.cookies

    if(!cookies?.jwt) return res.status(401).json({message: 'Unauthorized'})

    const refreshToken = cookies.jwt


})


const logoutUser = asyncHandler(async(req, res, next) => {
    // Clear cookie after logging out

    const cookies = req.cookies
    if(!cookies?.jwt) return res.sendStatus(204)

    res.clearCookie('jwt', '', {
        httpOnly: true,
    })
    res.status(200).json({
        message:'Logged Out Successfully'
    })
    next()
})


/* @desc - View profile '/recipe/auth/profile/:id' GET */
// private

/* 
    Get the id of the user from the generated token
    make the route private for those with the access token


*/

const userProfile = asyncHandler(async(req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json({
        ...user
    })  
})


/* update profile */
const updateProfile = asyncHandler(async(req, res, next)=> {
    const {name,email, password} = req.body
    
    /* find the user */
    let user = await UserModel.findById(req.user._id)

    // if there's a user, make changes to them
    if(user){
        user.name = name || user.name
        user.email = email || user.email
        // change the password when there's password
        // else make no change
        if(password) {  
            user.password = password 
        }

        const updatedProfile = await user.save();
        res.status(200).json({
            _id: updatedProfile._id,
            name :updatedProfile.name ,
            email: updatedProfile.email
        })
    }
    else {
        next(new CustomError('User not found', 404))
    }


})


export {registerUser, loginUser, logoutUser, userProfile, updateProfile, refresh }