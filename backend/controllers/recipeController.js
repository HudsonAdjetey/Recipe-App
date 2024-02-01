/* 
GET all recipes from the database, and query results from search
GET recipes saved by the user
POST a new recipe to save for later or add it to their profile.

GET reviews from DOCTORS with some info about good health

GET videos url 
POST to save a video of a doc or recipe

PUT request for food update 
 
** created recipes by user should be public for other poeple



*/

/* 
--> Get the recipeModel
-->  async Handler

*/
import asyncHandler from "express-async-handler"
import CustomError from '../utils/customErrorHandler.js'
import FoodRecipeModel from "../model/recipeModel.js"
import UserModel from "../model/userModel.js"

/* GET ALL RECIPES */

const allDishes = asyncHandler(async(req, res, next)=>{
    //get data from model
    const allDishes = await FoodRecipeModel.find({})

    if(allDishRecipe){
        //send response
        res.status(200).json({
            status: "Success",
            dishes: allDishes
        })
    }
    else {
        next(new CustomError('No dish found', 404))
    }
})

// searching in db using regex


const createDish = asyncHandler(async(req, res, next)=>{
    
    const newDish = await FoodRecipeModel.create(req.body)
    const dishCreated = await newDish.save()

    /* find the user */
    // if (createdDish && req?.user?._id ){

    // }
    
    const user = await UserModel.findById( req.user._id ).populate('createdDish').select('-password')
    if(user){
        user.createdDish.push(dishCreated._id)
        await user.save()
        res.status(200).json({
            message:"New Dish Created!",
            
        })

    }

    if(dishCreated){
        res.status(201).json({
            message:"dish added successfully!",
        })
    }else {
        next(new CustomError("Something went wrong while adding a recipe",500));
    }
})

// @desc -- POST REQUEST
// Privacy - Private



const saveRecipe = asyncHandler(async(req, res, next) => {
    /* GET THE RECIPE */
    /*    const savedRecipes = await SavedRecipeModel.findOneAndUpdate({}, {$addToSet:{savedRecipes : req.params.recipeID}})*/
    const dish = await FoodRecipeModel.findById(req.body.RecipeID)
    const user = await UserModel.findById(req.user._id)
    
    // Check if the user Already has the dish saved
    if(!user.savedDishes.includes(dish._id)){
        let updatedUser = await UserModel.findOneAndUpdate({'_id': req.user._id}, {$addToSet: {"savedDishes": dish._id}} )
        await updatedUser.save()
        res.status(200).json({
            message: "Saved Successfully",
        })
    }
    if(user.savedDishes.includes(dish._id)){
        next()
    }

})


const viewSavedCollections = asyncHandler(async(req, res, next)=>{
    // get all recipes from users collection of saved collections
    const findUser = await UserModel.findById(req.user._id).select('-password').populate('savedDishes')
    if (!findUser || !findUser.savedDishes ) return next();
    const allSavedRecipes = findUser.savedDishes
    res.status(200).json({
        saved: {
            ...allSavedRecipes
        }
    })
})

/* 
+--------+                                           +---------------+
|        |------------ Authorization Grant --------->|               |
|        |                                           |               |
|        |<--------------- Access Token -------------|               |
|        |               & Refresh Token (cookie)    |               |
|        |               & XSRF Token                |               |
|        |                                           |               |
|        |                                           |               |
|        |--------- Access Token ------------------->|               |
|        |                                           |               |
|        |<----- Protected Resource -----------------|               |
| Client |                                           |     Server    |
|        |--------- Access Token ------------------->|               |
|        |                                           |               |
|        |<----- Invalid Token Error ----------------|               |
|        |                                           |               |
|        |                                           |               |
|        |---------------- Refresh Token ----------->|               |
|        |               & XSRF Token                |               |
|        |                                           |               |
|        |<--------------- Access Token -------------|               |
|        |               & XSRF Token                |               |
+--------+               & Optional Refresh Token    +---------------+ */

export {allDishes, createDish, saveRecipe, viewSavedCollections}