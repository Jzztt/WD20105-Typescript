import React from "react";
const Register = () => {

  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className="bg-white border border-gray-200 shadow-lg rounded w-[500px] h-[300px] p-4">
          <h1 className="text-center  font-bold text-2xl">Register</h1>
          <form action="">
            <div className=" my-4">
              <label htmlFor="">Email</label>
              <input
                className="border border-gray-200 w-full rounded"
                type="text"
              />
            </div>
            <div className=" my-4">
              <label htmlFor="">Password</label>
              <input
                className="border border-gray-200 w-full rounded"
                type="password"
              />
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
