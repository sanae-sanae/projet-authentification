const express = require('express');
const router = express.Router();
const passport = require('passport');
const oauthController = require('../controllers/oauthController');

//  hadi Google OAuth lamsahty xi haja ajawad atmot
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), oauthController.oauthCallback);

//  hadi GitHub OAuth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', { session: false }), oauthController.oauthCallback);

//hadi Facebook OAuth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), oauthController.oauthCallback);

module.exports = router;