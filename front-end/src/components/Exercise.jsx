import React from 'react'

function Exercise(props) {
  const {exercise, deleteExercise} = props;
  
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0,10)}</td>
      <td><button className = "btn btn-danger" onClick={()=>{deleteExercise(exercise._id)}}>Delete</button>
      </td> 
    </tr>
  )
}

export default Exercise;
