import React from 'react'
import { Link } from "react-router-dom";

function Exercise(props) {
  const {exercise} = props;
  
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0,10)}</td>
      <td><Link to={"/edit/"+props.exercise._id}>Edit</Link> | <button onClick={}>Delete</button> 
      
      </td> 
    </tr>
  )
}

export default Exercise;
