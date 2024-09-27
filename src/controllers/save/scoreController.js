// controllers/authController.js
const User = require('../../models/User');
const Module = require('../../models/Module');
const Submodule = require('../../models/Submodule');
const Topic = require('../../models/Topic');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../../middlewares/err/errorHandler');

const scoreController = errorHandler(async (req, res) => {
    const { module, submodule, topic, score } = req.body;

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

    const foundModule = user.enrolledCourses.find(userModule => userModule.name === module);

    const foundSubmodule = foundModule.submodules.find(userSubmodule => userSubmodule.name === submodule);

    const foundTopic = foundSubmodule.topics.find(userTopic => userTopic.name === topic);

    foundTopic.score = score;

    await Topic.findOneAndUpdate(
        { _id: foundTopic._id }, // Filter to find the specific topic
        { $set: { score } },     // Update the score field
        { new: true }            // Option to return the updated document
    )    

    res.status(200).json({ message: 'Score saved successfully.' });
});

// Wrap the controller function with errorHandler
module.exports = scoreController;
