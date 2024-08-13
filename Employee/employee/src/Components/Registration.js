import React from "react";
import {useForm} from 'react-hook-form';

function Registration() {
  const {
    register,
    handleSubmit
  } = useForm()
  const onSubmitData = async (data) => {
    try {
      let response = await fetch("http://localhost:3000/registration-form", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      let result = await response.text();
      console.log(data, result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmitData)}>
        <div className="container mx-2 my-2"><input {...register("name")} type="text" placeholder="Employee Name" /></div>
        <div className="container mx-2 my-2"><input {...register("cname")} type="text" placeholder="Company Name" /></div>
        <div className="container mx-2 my-2"><input {...register("salary")} type="number" placeholder="Salary" /></div>
        <div className="container mx-2 my-2"><input {...register("doj")} type="date" /></div>
        <div className="container mx-2 my-2"><button type="submit">Submit</button></div>
      </form>
    </>
  );
}

export default Registration;
