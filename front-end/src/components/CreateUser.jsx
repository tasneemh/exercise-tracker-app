import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

function CreateUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) =>{
    console.log(data);
    //history.push("/");
    e.target.reset();
    axios.post(`http://localhost:5000/users/add`, {data}).then(response=>{
      console.log("response inside axios: ",response);
    }).catch(error=>{
      console.log("error: ", error);
    });
  }; 
  return (
     <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username: </label>
          <input {...register("username")}
          className="form-control"/>          
        </div>
        <div className="form-group">
          <input type="submit" value="Create New User" className="btn btn-primary"/>
        </div>
      </form>
    </div>
  )
}

export default CreateUser
