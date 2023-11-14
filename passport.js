const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const express = require("express");

passport.use(new GoogleStrategy({
        clientID: "694902804658-d0r3lfnftk4ac4cr5v4v65n2t4qs1ctu.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "https://localhost:4001/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // Aquí puedes buscar/crear un usuario en tu base de datos y luego llamar a done
        const user = { googleId: profile.id, name: profile.displayName };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        return done(null, user, token); // Pasar el token como tercer argumento
    }
));

