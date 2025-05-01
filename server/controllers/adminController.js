import express from 'express';
import { isAuthenticatedUser } from "../middlewares/auth.js"; // Authentication middleware
import { isAdmin } from "../middlewares/isAdmin.js"; // Admin check middleware
import { getAllUsers } from "../controllers/userController.js"; // Import the admin controller

const router = express.Router();

// Route for admin to get all users
router.get('/admin/users', isAuthenticatedUser, isAdmin, getAllUsers);

export default router;
