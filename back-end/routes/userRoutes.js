const express = require('express'); //creating router object
const router = express.Router();
let User = require("../models/user.model"); //importing mongoose user model

router.route('/').get((request, response)=>{
  //find is mongoose method that gives all the users from mongoDB
  User.find()
  .then(users=>{
    console.log("users: ", users);
    response.json(users)
  })
  .catch(error =>{
    console.log("error: ", error);
    response.status(400).json("Error: "+ error)
  });
});

router.route('/add').post((request, response)=>{
  console.log("request.body in/add: ",request.body);
  const username = request.body.username;

  const newUser = new User({username});

  newUser.save()
  .then(()=>{
    console.log("New user added!");
    response.json("New user added!")
  })
  .catch(error =>{
    console.log(error);
    response.status(400).json("Error: "+ error)
  });
});

module.exports = router;