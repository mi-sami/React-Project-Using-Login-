import React from "react";
import Navbar from "../../Components/Navbar";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (<>
    <Navbar />
    <div className="w-screen h-screen">
      
      <div className="h-full w-full flex justify-center ">

      <div className="w-md my-auto
        border-1  rounded-2xl 

      ">
        <p className="font-bold
        text-2xl text-center my-3">Login Form</p>

       <form className="pl-5 pb-5" onSubmit={handleSubmit(onSubmit)}>

        <div>
      <label className="pl-2" htmlFor="Email">Email</label><br />
      <input className="border border-s-sky-600 p-2 rounded-2xl" type="email" placeholder="Enter Your email"  {...register("Email", { required: true })} />
      <br />

      {errors.Email && <span className="text-red-700">This email is required</span>}
      </div>

        <div>
      <label className="pl-2" htmlFor="Password">Password</label><br />
      <input className="border border-s-sky-600 p-2 rounded-2xl" type="password" placeholder="Enter Your Password"  {...register("Password", { required: true })} />

      <br />
      

      {errors.Password && <span className="text-red-700">This password is required</span>}
      </div>


    

      
      
      
      
      



      <div className="mt-2 w-[90px] mx-auto">
      <input className="bg-green-900 text-white p-2 rounded" type="submit" />
      </div>
    </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;