const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  reservation: {
    type: String,
    enum: ['SC', 'ST', 'OBC', 'General'],
    required: true
  },
  family_size: {
    type: Number,
    default: 0,
  },
  marital_status: {
    type: Boolean,
    default: false,
  },
  disability: {
    type: Boolean,
    default: false,
  },
  aadhar_status: {
    type: Boolean,
    default: false,
  },
  pan_status: {
    type: Boolean,
    default: false,
  },
  voterid_status: {
    type: Boolean,
    default: false,
  },
  rentagreement_status: {
    type: Boolean,
    default: false,
  }
});

const Policy = mongoose.model('Policy', PolicySchema);

module.exports = Policy;  
