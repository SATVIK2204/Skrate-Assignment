const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { v4: uuidv4 } = require('uuid');
const { BadRequestError, NotFoundError } = require('../errors');


router.post('/new', async (req,res)=>{

    const username = req.body.username
    if(!username){
        throw new BadRequestError('Please Enter a UserName');
    }
    req.body.uid = uuidv4()
    console.log(req.body.uid);
    const user = await User.create({ ...req.body });

    res.send(req.body.uid);
})

router.get('/all', async (req, res) => {
  const users = await User.find({}, '-_id username uid').lean();
  res.json(users);
});

module.exports = router;