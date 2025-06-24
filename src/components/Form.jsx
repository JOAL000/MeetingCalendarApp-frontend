import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";


//Time: '06:20', Date: '2025-06-20', Level: 'IT', Participants: 'a@s.se', Description: '1'}
export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const apiEndpoint = "http://localhost:8080/api/meeting";

  const onSubmit = data =>{ 
    console.log(data);
    submit(apiEndpoint,(data+", Id: '0'"));
  };
  console.log(errors);
  
  const submit = async (apiEndpoint,formData) => {
    try {
      const response = await axios.post(apiEndpoint, formData);
      if (response.status === 201) {
        console.log("Invitation created successfully.");
      }
    } catch (error) {
      console.error("Error creating invitation:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="mb-3">
        <label className="form-label">Meeting Title</label>
        <input
          type="text"
          placeholder="Meeting Title"
          {...register}
          className="form-control"
        />
      </div>
      <div className="mb-3 row">
        <div className="col-md-6">
          <label className="form-label">Time</label>
          <input
            type="time"
            placeholder="Time"
            {...register("Time", { required: true })}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            placeholder="Date"
            {...register("Date", { required: true })}
            className="form-control"
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Level</label>
        <select {...register("Level")} className="form-select">
          <option value="Management">Management</option>
          <option value="Department">Department</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Team">Team</option>
          <option value="HR">HR</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Participants</label>
        <input
          type="email"
          placeholder="Participants"
          multiple
          {...register("Participants", { required: true })}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          placeholder="Description"
          {...register("Description", { maxLength: 1500 })}
          className="form-control"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}