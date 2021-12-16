const express = require('express');
const { createMeeting, getAllMeetings, deleteMeeting } = require('../controllers/meetingsController');
const router = express.Router();



router.post('/new', createMeeting);

router.delete('/delete/:id', deleteMeeting);

router.get('/all', getAllMeetings);

module.exports = router;
