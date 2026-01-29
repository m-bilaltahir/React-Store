import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate,NavLink } from "react-router-dom";

function Signup() {

const[userdata,setuserdata]=useState([])
  
const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

  const onSubmit = (data) =>{
    setuserdata([...userdata,data]) 
    console.log(data);
}

  return (
    // Whole Window
    <div className="h-screen w-screen bg-[url('./background.png')] bg-cover bg-bottom flex justify-center items-center">
      {/* Signup Form */}
      <div className="bg-white opacity-70 w-md rounded-3xl shadow-2xl pt-11 pl-15 pr-15 pb-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold mb-3">Sign Up</h2>

          {/* First name and last name input */}
          <input
            {...register("FirstName", {
              required: { value: true, message: "Name is required" },
              minLength: { value: 5, message: "Name is too short" },
            })}
            className="border-blue-950 border shadow-blue-950 shadow hover:shadow-2xl rounded-xl p-2"
            type="text"
            placeholder="👤First Name"
          />

          {/* Firstname message */}
          {errors.FirstName && (
            <div className="text-red-600 font-bold text-sm">
              {errors.FirstName.message}
            </div>
          )}

          <input
            {...register("LastName")}
            className="border-blue-950 border shadow shadow-blue-950 hover:shadow-2xl rounded-xl p-2"
            type="text"
            placeholder="👤Last Name"
          />

          {/* Email input */}
          <input
            {...register("Email", {
              required: { value: true, message: "Email is required" },
              minLength: { value: 5, message: "Email is too short" },
              pattern: { value: /[@]/, message: "Email is invalid" },
            })}
            className="border-blue-950 border shadow-blue-950 shadow hover:shadow-2xl rounded-xl p-2"
            type="email"
            placeholder="✉️ Email"
          />

          {/* Email message */}
          {errors.Email && (
            <div className="text-red-600 font-bold text-sm">
              {errors.Email.message}
            </div>
          )}

          {/* Password input */}
          <input
            {...register("Password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 5,
                message: "Password is too short",
              },
              pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])/,
                  message:"Password must contain 1 Upper or LowerCase,1 Special Character and Number",
                },
            })}
            className="border-blue-950 border shadow-blue-950 shadow hover:shadow-2xl rounded-xl p-2"
            type="password"
            placeholder="🔒 Password"
          />

          {/* Email message */}
          {errors.Password && (
            <div className="text-red-600 font-bold text-sm">
              {errors.Password.message}
            </div>
          )}
    
          <button 
          className="text-lg font-bold bg-blue-500 border-blue-950 border shadow-blue-950  hover:shadow-2xl rounded-xl p-2 cursor-pointer"
          type="submit"
          disabled={isSubmitting}
          > {isSubmitting?"Loading...":"Sign Up"}</button>
        </form>

        <div className="text-blue-950 text-[12px]  mt-9">
            <NavLink to="/" className="hover:underline hover:font-bold cursor-pointer">Log In</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Signup;
