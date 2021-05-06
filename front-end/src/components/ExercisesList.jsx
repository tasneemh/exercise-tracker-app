import React,{useEffect} from 'react'
import axios from "axios";
import Exercise from "./Exercise";

function ExercisesList(props) {
  const {exercises, setExercises} = props;
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/exercises`).then(response=>{
      console.log("response inside axios: ",response);   
      setExercises(response.data);            
    }).catch(error=>{
      console.log("error: ", error);
    });
  },[setExercises]);

  const deleteExercise = (id) =>{
    axios.delete("http://localhost:5000/exercises/"+id).then(response=>{
      console.log("response: ", response);
      const newExercises = exercises.filter(element=>
        element._id!==id
      );
      console.log(newExercises);
      setExercises(newExercises);
    }).catch(error=>{
      console.log("error: ", error);
    });
  };

  return (
    <div>
    <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
        <tr>
        <th>Username</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Date</th>
        <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {exercises && exercises.map(exercise=>
        <Exercise key={exercise._id} 
        exercise={exercise}
        deleteExercise={deleteExercise}
        /> 
        )}
        </tbody>        
      </table>      
    </div>
  )
}

export default ExercisesList;
