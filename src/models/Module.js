// Module.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const moduleSchema = new Schema({
  name: { type: String, required: true },
  submodules: [ {type: Schema.Types.ObjectId, ref: 'Submodule' }]
});

module.exports = mongoose.model('Module', moduleSchema);
