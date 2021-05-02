const express = require('express'); //creating router object
const router = express.Router();
let Exercise = require("../models/exercise.model"); //importing mongoose exercise model

router.route("/").get((request, response)=>{
  //find is mongoose method that gives all the users from mongoDB
  Exercise.find()
  .then(exercises=>{
    console.log("exercises: ", exercises);
    response.json(exercises)
  })
  .catch(error =>{
    console.log("error: ", error);
    response.status(400).json("Error: "+error)
  });
});

router.route("/add").post((request, response)=>{
  console.log("request.body in/add: ",request.body);
  const username = request.body.username;
  const description = request.body.description;
  const duration = Number(request.body.duration);
  const date = Date.parse(request.body.date);

  const newExercise = new Exercise({username,
  description,
  duration,
  date});

  newExercise.save()
  .then(()=>{
    console.log("New exercise added!");
    response.json("New exercise added!")
  })
  .catch(error =>{
    console.log(error);
    response.status(400).json("Error: "+ error)
  });
});

module.exports = router;