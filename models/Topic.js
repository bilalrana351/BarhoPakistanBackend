// Topic.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Topic schema
const topicSchema = new Schema({
  name: { type: String, required: true },
  questions: [ {type: [Schema.Types.Mixed], default: [] } ],
  score: { type: Number, default: 0 },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Topic', topicSchema);
