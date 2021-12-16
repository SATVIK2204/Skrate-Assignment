const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  res.send('<h1>Skrate Api </h1><a href="/api-docs" >Documentaion</a>');
});




module.exports = router;
