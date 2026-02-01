import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate,NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Login() {
const navigate=useNavigate();
  const loginchk=useSelector((state)=>state.userData.userData)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

//  Check user and password
  const handleLogin=(data)=>{
     const user=loginchk.find((np)=>np.Email===data.Email&&np.Password===data.Password)
    return user
  }

  const onSubmit = (data) =>{ 
    if(handleLogin(data)){
      alert('succussfully Login')
      navigate("./Ecommerce")
    }
    else{
      alert("Wrong Username or password")
    }

  }

    
  return (
    // Whole window
    <div className="flex items-center justify-center h-screen w-screen  bg-cover bg-bottom bg-[url('./background.png')]">
      <div className="bg-white opacity-70 p-15 rounded-3xl shadow-2xl w-md  ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">React Store</h1>
          {/* Email Input */}
          <input
            {...register("Email", {
              required: { value: true, message: "Email is required" },
              minLength: { value: 5, message: "Email is too short" },
              maxLength: { value: 35, message: "Email is too long" },
              pattern: { value: /[@]/, message: "Invalid Email" },
            })}
            className="border-blue-950 border shadow-blue-950 shadow hover:shadow-2xl rounded-xl p-2"
            type="email"
            placeholder="✉️ Email"
          />
          {/* Email Error message */}
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
                value: 8,
                message: "Password must be at least 8 character",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])/,
                message:
                  "Password must contain 1 Upper or LowerCase,1 Special Character and Number",
              },
            })}
            className=" border-blue-950 border  shadow-blue-950 shadow hover:shadow-2xl rounded-xl p-2"
            type="Password"
            placeholder="🔒 Password"
          />

          {/* Password error message */}

          {errors.Password && (
            <div className="text-red-600 font-bold text-sm">
              {errors.Password.message}
            </div>
          )}

          {/* Login Button */}
          <button
            className="text-lg font-bold bg-blue-400 border-blue-950 border shadow-blue-950 hover:shadow-2xl rounded-xl p-2 cursor-pointer"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>

        </form>

        {/* Signup and forgot passwrod option */}
        <div className="text-blue-950 text-[12px] flex place-content-between  mt-5">
          <button className="hover:underline hover:font-bold cursor-pointer">
            Forgot Password ?
          </button>
          <NavLink to="/SignUp" className="hover:underline hover:font-bold cursor-pointer">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;















// import React from "react";
// import { useForm } from "react-hook-form";


// function Login() {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div
//       className="h-screen w-screen flex items-center justify-center bg-cover bg-bottom"
      
//     >
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//           <input {...register("Username")} type="text" placeholder="Username" className="border p-2 rounded" />
//           <input {...register("Password")} type="password" placeholder="Password" className="border p-2 rounded" />
//           <input type="submit" className="bg-blue-500 text-white p-2 rounded cursor-pointer" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
