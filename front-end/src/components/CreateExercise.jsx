import React from 'react'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";


function CreateExercise(props) {
  const {startDate, setStartDate} = props;
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const onSubmit = data =>{
    data.date = startDate;
    console.log(data);
    history.push("/");
  }; 
  return (
    <div>
      <h3>Create New Exercise</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username: </label>
          <input {...register("user")}
          className="form-control"/>
          {/** 
          <select {...register("user")}
          className="form-control"
          >         
          {users.map(user=>
            <option 
            key={user}
            value={user}>{user}</option>
            )}
          </select>
          
          */}
          
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input {...register("description")}
          className="form-control"/>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input {...register("duration")}
          className="form-control"/>
        </div>
        <div className="form-group">
          <label>Date: </label>
            <div>
            <DatePicker selected={startDate} 
            {...register("date")}
            onChange={date => setStartDate(date)}/>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  )
}

export default CreateExercise;
