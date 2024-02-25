const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 7000;

app.use('/auth', authRoutes);
// Configure express-session middleware
app.use(session({
    secret: 'uWIllNeverKNowIt', // Replace with your own secret key
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((profile, done) => {
    done(null, profile.id);
});

passport.deserializeUser((id, done) => {
    const user = getUserById(id);
    done(null, user);
});

passport.use(new GitHubStrategy({
    clientID: 'e862c639a8cbfd4c9ae0',
    clientSecret: 'cd9d750423852d692eefd0325c27843bf44d1584',
    callbackURL: 'http://localhost:7000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
