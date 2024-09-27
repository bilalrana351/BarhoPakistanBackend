const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');

const signupController = errorHandler(async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' , title: 'Password Mismatch'});
    }

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already taken', title: 'Username Taken' });
    }

    const newUser = new User({ username, password: bcrypt.hashSync(password,10) });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, username: username}, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ token: token });
});

// Wrap the controller function with errorHandler
module.exports = signupController;
