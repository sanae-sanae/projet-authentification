const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const oauthRoutes = require('./routes/oauthRoutes');
const passport = require('passport');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(passport.initialize());

//  hadi Passport Config
require('./config/passport')(passport);

//  hadi Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/oauth', oauthRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));