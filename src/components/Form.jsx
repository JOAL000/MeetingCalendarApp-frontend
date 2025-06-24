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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="mb-3">
      <label >Meeting Title</label>
      <input type="text" placeholder="Meeting Title" {...register} /> <br />
      </div>
      <div class="mb-3">
      <input type="time" placeholder="Time" {...register("Time", {required: true})} />
      <input type="date" placeholder="Date" {...register("Date", {required: true})} />
      </div>
      <div class="mb-3">
      <select {...register("Level")}>
        <option value="Management">Management</option>
        <option value="Department">Department</option>
        <option value="IT">IT</option>
        <option value="Finance">Finance</option>
        <option value="Team">Team</option>
        <option value="HR">HR</option>
      </select>
      </div>
      <input type="email" placeholder="Participants" multiple {...register("Participants", {required: true})} /><br />
      <input type="text" placeholder="Description" {...register("Description", { maxLength: 1500})} />

      <input type="submit" />
    </form>
  );
}