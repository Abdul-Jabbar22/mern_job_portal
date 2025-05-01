const express = require('express');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin');
const { getAllUsers, deleteUser } = require('../controllers/adminController');

// Admin routes
router.get('/admin/users', isAdmin, getAllUsers);
router.delete('/admin/user/:id', isAdmin, deleteUser);

module.exports = router;
