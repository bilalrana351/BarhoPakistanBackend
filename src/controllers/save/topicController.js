// controllers/authController.js
const User = require('../../models/User');
const Module = require('../../models/Module');
const Submodule = require('../../models/Submodule');
const Topic = require('../../models/Topic');
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

    const foundModule = user.enrolledCourses.find(userModule => userModule.name === module);

    if (!foundModule){
        return res.status(401).json({ message: 'Module not found.', title: 'Module not found.' });
    }

    const foundSubmodule = foundModule.submodules.find(userSubmodule => userSubmodule.name === submodule);

    for (const t of topic) {
        const newTopic = new Topic({
            name: t,
            questions: [],
            score: 0,
            completed: false
        }) 

        await newTopic.save();
        
        foundSubmodule.topics.push(newTopic._id);
    }

    await foundSubmodule.save();

    await foundModule.save();

    await user.save();

    res.status(200).json({ message: 'Score saved successfully.' });
});

// Wrap the controller function with errorHandler
module.exports = topicController;
