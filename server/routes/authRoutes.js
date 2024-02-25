const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/github' , authController.githubLogin);
router.get('/github/callback',authController.githubCallback);
router.get('/profile', (req, res) => {
    const userId = req.user.id; // Assuming the user is authenticated and req.user contains user information
    const user = getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

module.exports = router;