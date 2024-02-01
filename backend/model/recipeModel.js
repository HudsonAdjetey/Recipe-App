/* 
## name of food
## image url of the food
## price of the food
## category
## instructions
## recipe
## cooking time
## calories
## prep time

*/

import mongoose from "mongoose";

const recipeFoodSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    desc: String,
    imageURL:{
        type:String,
        required:true
    },
    recipes: [],
    instructions: [],
    category: {
        type: String,
        enum: ["Breakfast", "Lunch", "Supper"],
        required: true
    },
    calories: {
        type: Number
    },
    cookingTime: Number,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },

}, {timestamps: true})


/* CREATING A GLOBAL RECIPE */



const FoodRecipeModel = mongoose.model('dishes', recipeFoodSchema)

export  default FoodRecipeModel