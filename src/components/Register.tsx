import React from "react";
import { useForm } from "react-hook-form";
import { authSchema, type IAuth } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router";
// Bước 1: lấy dữ liệu từ form
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({resolver: zodResolver(authSchema)});
  const navigate = useNavigate();

  const handleRegister = async (value: IAuth) => {
     await axios.post("http://localhost:3000/register", value);
    navigate("/Login");
  }
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className="bg-white border border-gray-200 shadow-lg rounded w-[500px] h-[300px] p-4">
          <h1 className="text-center  font-bold text-2xl">Register</h1>
          <form
            onSubmit={handleSubmit(handleRegister)}
            action=""
          >
            <div className=" my-4">
              <label htmlFor="">Email</label>
              <input
                {...register("email")}
                className="border border-gray-200 w-full rounded"
                type="text"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className=" my-4">
              <label htmlFor="">Password</label>
              <input
                {...register("password")}
                className="border border-gray-200 w-full rounded"
                type="password"
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            </div>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
