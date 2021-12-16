const express = require('express');
const router = express.Router();
const Meeting = require('../models/Meeting');
const { v4: uuidv4 } = require('uuid');
const { BadRequestError, NotFoundError } = require('../errors');

router.post('/new', async (req, res) => {
//   const username = req.body.username;
  const username = req.body.uid1;
  if (!req.body.uid1 || !req.body.uid2 || !req.body.date) {
    throw new BadRequestError('Please Enter complete Details');
  }
  req.body.uidMeeting = uuidv4();
//   req.body.user1 = req.body.uid1;
//   console.log(req.body.uid);
//   const meeting = await Meeting.create({ ...req.body });
const meeting = await Meeting.create([{ ...req.body }]);
  res.send(req.body);
});

router.get('/all', async (req, res) => {
  const meetings = await Meeting.find({}, '-_id -__v')
    .populate({ path: 'user1', select: '-_id username uid' })
    .populate({ path: 'user2', select: '-_id username uid' });
  res.json(meetings);
});

module.exports = router;
