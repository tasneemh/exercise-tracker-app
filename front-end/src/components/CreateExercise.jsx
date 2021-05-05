import React,{useEffect} from 'react'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateExercise(props) {
  const {startDate, setStartDate, users, setUsers} = props;
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  
  const getAllUsers = () =>{
    axios.get(`http://localhost:5000/users`).then(response=>{
      console.log("response: ", response.data);
      setUsers(response.data);
    }).catch(error=>{
      console.log("error: ", error);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const onSubmit = data =>{
    data.date = startDate;
    console.log("data: ", data);
    history.push("/");
    axios.post(`http://localhost:5000/exercises/add`, {data}).then(response=>{
      console.log("response inside axios: ", response);
    }).catch(error=>{
      console.log("error: ", error);
    });
  }; 
  return (
    <div>
      <h3>Create New Exercise</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username: </label>
          <select {...register("username")}
          className="form-control"
          >         
          {users.map(user=>
            <option 
            key={user._id}
            value={user.username}>{user.username}</option>
            )}
          </select>  
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
