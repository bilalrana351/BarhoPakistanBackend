// controllers/authController.js
const User = require('../../models/User');
const errorHandler = require('../../middlewares/err/errorHandler');
const moduleProgress = require('@/utils/moduleProgress');

const modulesController = errorHandler(async (req, res) => {
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

    const modulesOriginal = user.enrolledCourses

    const modules = modulesOriginal.map((module) => {
        return {
            name: module.name,
            progress: moduleProgress(module)
        }
    })
    
    return res.status(200).json({ modules: modules });
});

// Wrap the controller function with errorHandler
module.exports = modulesController;
