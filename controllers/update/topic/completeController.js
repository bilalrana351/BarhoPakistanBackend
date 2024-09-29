// controllers/authController.js
const User = require('../../../models');
const errorHandler = require('@/middlewares/err/errorHandler');

const getModule = (user, module) => {
    const foundModule = user.enrolledCourses.find(userModule => userModule.name === module);
    if (!foundModule) {
        return null;
    }

    return foundModule;
}

const getSubmodule = (module, submodule) => {
    const foundSubmodule = module.submodules.find(userSubmodule => userSubmodule.name === submodule);
    if (foundSubmodule === null) {
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

const updateController = errorHandler(async (req, res) => {
    const { module, submodule, topic, score } = req.body;

    // const username = req.username;
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

    const retrievedTopic = getTopic(user, module, submodule, topic, score);

    retrievedTopic.completed = true;

    if (retrievedTopic.score < score) {
        retrievedTopic.score = score;
    }
    
    await retrievedTopic.save();

    return res.status(200).json({ message: 'update saved successfully.' });
});

// Wrap the controller function with errorHandler
module.exports = updateController;
