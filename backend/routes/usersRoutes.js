import express from 'express'
import { loginUser, logoutUser, registerUser, updateProfile, userProfile } from '../controllers/authController.js';
import protectedRoute from '../middleware/authMiddleware.js';

/* setting up a router */
const router = express.Router();

// register router
router.post('/register', registerUser )
// login router 
router.post('/', loginUser )
// logout router 
router.post('/logout',  logoutUser )
/* update router */
router.put('/users/update', protectedRoute, updateProfile )
/* view profile */
router.get('/users/', protectedRoute, userProfile )


export default router