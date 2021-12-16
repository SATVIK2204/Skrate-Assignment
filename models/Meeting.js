const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  uid1: {
    type: String,
    required: [true, 'Please provide uid1'],
    maxlength: 50,
    minlength: 3,
  },

  uid2: {
    type: String,
    required: [true, 'Please provide uid2'],
    minlength: 4,
  },
  uidMeeting: {
    type: String,
    required: [true, 'Please provide Meeting Uid'],
    minlength: 4,
  },

  date: {
    type: String,
    required: [true, 'Please provide date'],
    minlength: 4,
  },

});

meetingSchema.virtual('user1', {
  ref: 'User',
  localField: 'uid1',
  foreignField: 'uid',
});

meetingSchema.virtual('user2', {
  ref: 'User',
  localField: 'uid2',
  foreignField: 'uid',
});

meetingSchema.set('toObject', { virtuals: true });
meetingSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Meeting', meetingSchema);
