const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Submodule schema
const submoduleSchema = new Schema({
  name: { type: String, required: true },
  topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }] // Array of Topic references
});

module.exports = mongoose.model('Submodule', submoduleSchema);
