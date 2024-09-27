// controllers/authController.js
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');

const topicController = errorHandler(async (req, res) => {
    const { module, submodule, topic } = req.body;

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

    const retrievedSubmodule = retrievedModule.find(userSubmodule => userSubmodule.name === submodule)

    const retrievedTopic = retrievedSubmodule.find(userTopic => userTopic.name === topic)
    
    return res.status(200).json({ topic: retrievedTopic });
});

// Wrap the controller function with errorHandler
module.exports = topicController;
