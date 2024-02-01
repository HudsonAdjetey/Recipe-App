/* 
    creating a schema unto a userModel
    **FUTURE TIPS ---> VALIDATE USERS such as usernames, password length and email validation

    */
import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Enter a valid name']
    },
    email: {
        type: String,
        required: [true, 'Enter a unique email'],
        unique: true
    },
    password:  {
        type:String ,
        minlength:[6,'Password must be at least six characters long!'],
        required: [true, 'Enter password']
    },
    savedDishes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dishes"
        },
    ],
    createdDish: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dishes"
        }
    ]
}, {timestamps: true})


/* HASHING THE PASSWORD */

userSchema.pre('save', async function(next) {
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
} )

/* COMPARE PASSWORD */
// Create a method which will make it accessible 
// to the model instance (i.e., User)
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

/* create the user model */
const UserModel = mongoose.model('users', userSchema);

export default UserModel
