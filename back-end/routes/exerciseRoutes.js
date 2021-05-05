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
  const username = request.body.data.username;
  const description = request.body.data.description;
  const duration = Number(request.body.data.duration);
  const date = Date.parse(request.body.data.date);
  console.log("typeof duration: ", typeof duration);
  console.log("typeof date: ", typeof date);
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

router.route("/:id").get((request, response)=>{
  const id = request.params.id;
  Exercise.findById(id)
  .then(exercise=>{
    console.log("exercise inside /:id",exercise);
    response.json(exercise)
  })
  .catch(error=>{
    console.log(error);
    response.status(400).json("Error: "+ error)
  });
});

router.route("/:id").delete((request, response)=>{
  const id = request.params.id;
  Exercise.findByIdAndDelete(id)
  .then(()=>{
    response.json("Exercise deleted!");
  })
  .catch(error=>{
    console.log(error);
    response.status(400).json("Error: "+ error)
  });
});

router.route("/update/:id").post((request, response)=>{
  const id = request.params.id;
  Exercise.findById(id)
  .then(exercise=>{
    console.log("exercise inside /update/:id", exercise);
    exercise.username = request.body.username;
    exercise.description = request.body.description;
    exercise.duration = Number(request.body.duration);
    exercise.date = Date.parse(request.body.date);

    exercise.save()
    .then(()=>{
      response.json("Exercise updated!")
    })
    .catch(error=>{
      console.log(error);
      response.status(400).json("Error: "+ error)
    });   
  })
  .catch(error=>{
    console.log(error);
  });
});

module.exports = router;