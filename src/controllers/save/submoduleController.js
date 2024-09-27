// controllers/authController.js
const User = require('../../models/User');
const Submodule = require('../../models/Submodule');
const errorHandler = require('../../middlewares/err/errorHandler');

const submoduleController = errorHandler(async (req, res) => {
    const { module, submodule } = req.body;

    const username = req.username;

    // Find user by username
    const user = await User.findOne({ username }).populate({
        path: 'enrolledCourses',
        populate: {
            path: 'submodules'
        }
    });

    if (!user) {
        return res.status(401).json({ message: 'We could not find your username.', title: 'User not found.' });
    }

    const foundModule = user.enrolledCourses.find(userModule => userModule.name === module);

    if (!foundModule) {
        return res.status(404).json({ message: 'Module not found.', title: 'Module not found.' });
    }

    const submoduleNames = new Set(submodule); // Use a Set to avoid duplicate submodule names

    for(submoduleName of Array.from(submoduleNames)) {
        const foundSubmodule = foundModule.submodules.find((userSubmodule) => userSubmodule.name === submoduleName);

        if (foundSubmodule) continue; // Skip if submodule already exists
        const newSubmodule = new Submodule({
            name: submoduleName,
            topics: []
        });

        await newSubmodule.save();

        foundModule.submodules.push(newSubmodule._id);
    };

    await foundModule.save();

    await user.save();

    return res.status(200).json({ message: 'Submodules updated successfully.' });
});

// Wrap the controller function with errorHandler
module.exports = submoduleController;
