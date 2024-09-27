// controllers/authController.js
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');
const submoduleProgress = require('@/utils/submoduleProgress')

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

    const retrievedModule = user.enrolledCourses.find(userModule => userModule.name === module)

    if (retrievedModule.submodules.length === 0){
        return res.status(200).json({submodules: []})
    }

    const submodulesWithTopics = retrievedModule.submodules

    const submodules = submodulesWithTopics.map((submodule) => {
        return {
            name: submodule.name,
            progress: submoduleProgress(submodule)
        }
    })
    
    return res.status(200).json({ submodules: submodules });
});

// Wrap the controller function with errorHandler
module.exports = moduleController;
