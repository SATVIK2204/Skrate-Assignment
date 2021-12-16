const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');
const { v4: uuidv4 } = require('uuid');
const { BadRequestError, NotFoundError } = require('../errors');


router.post('/new', async (req, res) => {

  if (!req.body.uid1 || !req.body.uid2 || !req.body.date) {
    throw new BadRequestError('Please Enter complete Details');
  }
  req.body.uidMeeting = uuidv4();
  const meeting = await Meeting.create([{ ...req.body }]);
  res.send(req.body.uidMeeting);
});


router.get('/all', async (req, res) => {
  const meetings = await Meeting.find({}, '-_id -__v')
    .populate({ path: 'user1', select: '-_id username uid' })
    .populate({ path: 'user2', select: '-_id username uid' });
  res.json(meetings);
});

module.exports = router;
