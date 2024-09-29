// controllers/authController.js
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');

const loginController = errorHandler ( async (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).json({ message: 'We could not find your username.', title: 'User not found.' });
    }


    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password', title: 'Invalid Credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });


    return res.status(200).json({ token: token });
});

// Wrap the controller function with errorHandler
module.exports = loginController;
