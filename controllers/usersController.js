const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');
const { BadRequestError, NotFoundError } = require('../errors');


const createUser = async (req, res) => {
  const username = req.body.username;
  if (!username) {
    throw new BadRequestError('Please Enter a UserName');
  }
  req.body.uid = uuidv4();
  console.log(req.body.uid);
  const user = await User.create({ ...req.body });

  res.send(req.body.uid);
};



const getAllUsers = async (req, res) => {
  const users = await User.find({}, '-_id username uid').lean();
  res.json(users);
};


const deleteUser = async(req,res) =>{
  
  const user = await User.findOneAndDelete({ uid: req.params.id });
  
  if(!user){
    throw new NotFoundError(`No user found with uid ${req.params.id}`);
  }
  res.json({msg: `User ${user.username} deleted successfully`})

}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser
}