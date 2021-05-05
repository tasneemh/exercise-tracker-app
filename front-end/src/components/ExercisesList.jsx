import React,{useEffect} from 'react'
import axios from "axios";
import Exercise from "./Exercise";

function ExercisesList(props) {
  const {exercises, setExercises} = props;
  const getAllExercises = () =>{
    axios.get(`http://localhost:5000/exercises`).then(response=>{
      console.log("response: ",response);
      setExercises(response.data);
    }).catch(error=>{
      console.log("error: ", error);
    });
  };
  const deleteExercise = (id) =>{
    axios.delete(`http://localhost:5000/exercises/${id}`).then(response=>{
      console.log("response: ", response);
    }).catch(error=>{
      console.log("error: ", error);
    });
  };
  useEffect(()=>{
    getAllExercises();
  },[]);
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
        <Exercise key={exercise._id} exercise={exercise}/> 
        )}
        </tbody>        
      </table>
      
    </div>
  )
}

export default ExercisesList
