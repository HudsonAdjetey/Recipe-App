import express from 'express'
import asyncHandler from 'express-async-handler'
import { allDishes, createDish, saveRecipe, viewSavedCollections } from '../controllers/recipeController.js'
import protectedRoute from '../middleware/authMiddleware.js'

const recipeRouter = express.Router()


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

// @desc GET all recipes
// Public but with only users can access
recipeRouter.get("/", allDishes )

// @desc GET all saved recipes
// private based on available user
recipeRouter.get("/saved", protectedRoute, viewSavedCollections)

// @desc GET reviews
recipeRouter.get("/reviews")

// @desc POST NEW RECIPE
recipeRouter.post("/create-recipe/", protectedRoute,createDish)

// @desc PUT SAVE RECIPE AND POST
recipeRouter.put('/save/', protectedRoute, saveRecipe )








export default recipeRouter