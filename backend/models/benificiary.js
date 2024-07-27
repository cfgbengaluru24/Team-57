const mongoose = require('mongoose');

const BenificarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
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
  phoneNo: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true
  },
  family_size: {
    type: Number,
    required: true,
  },
  marital_status: {
    type: Boolean,
    required: true
  },
  disability: {
    type: Boolean,
    required: true
  },
  aadhar_status: {
    type: Boolean,
    required: true
  },
  pan_status: {
    type: Boolean,
    required: true
  },
  voterid_status: {
    type: Boolean,
    required: true
  },
  rentagreement_status: {
    type: Boolean,
    required: true
  }
});

const Benificiary = mongoose.model('Benificiary', BenificarySchema);

module.exports = Benificiary;
