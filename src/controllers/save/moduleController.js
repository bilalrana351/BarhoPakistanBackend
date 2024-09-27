// controllers/authController.js
const User = require('../../models/User');
const Module = require('../../models/Module');
const Submodule = require('../../models/Submodule');
const Topic = require('../../models/Topic');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');

const moduleController = errorHandler(async (req, res) => {
    const { module } = req.body;

    const username = req.username;
    
    // Find user by username
    const user = await User.findOne({ username }).populate({
        path: 'enrolledCourses',
        populate: {
          path: 'submodules',
          populate: {
            path: 'topics'
          }
        }
    });

    if (!user) {
        return res.status(401).json({ message: 'We could not find your username.', title: 'User not found.' });
    }

    const foundModule = user.enrolledCourses.find((userModule) => userModule.name === module);

    if (foundModule === undefined){
        // Create a new module object
        const newModule = new Module({
            name: module,
            submodules: []
        })

        await newModule.save();

        // Add the new module to the user's enrolledCourses
        user.enrolledCourses.push(newModule._id);

        await user.save();

        return res.status(200).json({ message: 'Module saved successfully.' });
    }

    return res.status(200).json({ message: 'response saved successfuly'})
});

// Wrap the controller function with errorHandler
module.exports = moduleController;
