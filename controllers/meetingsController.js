const Meeting = require('../models/Meeting');
const { v4: uuidv4 } = require('uuid');
const { BadRequestError, NotFoundError } = require('../errors');



const createMeeting = async (req, res) => {
  if (!req.body.uid1 || !req.body.uid2 || !req.body.date) {
    throw new BadRequestError('Please Enter complete Details');
  }
  req.body.uidMeeting = uuidv4();
  const meeting = await Meeting.create([{ ...req.body }]);
  res.send(req.body.uidMeeting);
};


const getAllMeetings = async (req, res) => {
  const meetings = await Meeting.find({}, '-_id -__v')
    .populate({ path: 'user1', select: '-_id username uid' })
    .populate({ path: 'user2', select: '-_id username uid' });
  res.json(meetings);
};


const deleteMeeting = async (req, res) => {
  const meeting = await Meeting.findOneAndDelete({ uid: req.params.id });

  if (!meeting) {
    throw new NotFoundError(`No meeting found with uid ${req.params.id}`);
  }
  res.json({ msg: `Meeting deleted successfully` });
};


module.exports = {
    createMeeting,
    getAllMeetings,
    deleteMeeting
}