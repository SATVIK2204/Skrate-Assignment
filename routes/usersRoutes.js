const express = require('express');
const { createUser, getAllUsers, deleteUser } = require('../controllers/usersController');
const router = express.Router();



router.post('/new', createUser);

router.delete('/delete/:id', deleteUser)

router.get('/all', getAllUsers);

module.exports = router;