const User = require('../models/User');
const jwt = require('jsonwebtoken');

//  hadi OAuth Callback
exports.oauthCallback = async (req, res) => {
  try {
    const { user } = req;
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.redirect(`/auth/success?token=${token}`);
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};