import React from 'react'
import { useForm } from "react-hook-form";

function CreateUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) =>{
    console.log(data);
    //history.push("/");
    e.target.reset();
  }; 
  return (
     <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Username: </label>
          <input {...register("user")}
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
