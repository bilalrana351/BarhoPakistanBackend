// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// We will include a new schema to store the courses of the user and then the further modules of the course
// This will be a nested schema

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    enrolledCourses: [ {type: Schema.Types.ObjectId, ref: 'Module', default: []} ]
});

module.exports = mongoose.model('User', userSchema);
