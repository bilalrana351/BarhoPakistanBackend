// controllers/authController.js
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');

const getModule = (user, module) => {
    const foundModule = user.enrolledCourses.find(userModule => userModule.name === module);
    if (!foundModule) {
        return null;
    }

    return foundModule;
}

const getSubmodule = (module, submodule) => {
    const foundSubmodule = module.submodules.find(userSubmodule => userSubmodule.name === submodule);
    if (!foundSubmodule) {
        return null;
    }

    return foundSubmodule;
}

const getTopic = (user, module, submodule, topic) => {
    const foundModule = getModule(user, module);

    const foundSubmodule = getSubmodule(foundModule, submodule);

    const foundTopic = foundSubmodule.topics.find(userTopic => userTopic.name === topic);

    return foundTopic
}

const messagesController = errorHandler(async (req, res) => {
    const { module, submodule, topic, history } = req.body;

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

    const retrievedTopic = getTopic(user, module, submodule, topic);
    
    return res.status(200).json({ messages: retrievedTopic.questions });
});

// Wrap the controller function with errorHandler
module.exports = messagesController;
