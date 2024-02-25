// controllers/authController.js

const passport = require('passport');
const users = {};

exports.getUserById = (id) => {
  return users[id];
};

exports.githubLogin = passport.authenticate('github');

exports.githubCallback = passport.authenticate('github', { failureRedirect: '/' }),
(req, res) => {
  if (!req.user) {
    // Handle authentication failure
    return res.status(401).json({ message: 'Authentication failed' });
  }
  
  // Authentication successful, send user data
  const user = req.user;
  res.json(user);
};
