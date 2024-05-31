import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rawData = new FormData(e.target);
    const formData = Object.fromEntries(rawData);
    console.log(formData); // Log formData to check its structure

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      console.log("All fields are required");
      return;
    }

    try {
      const response = await axios.post("https://learn-it-zl9y.onrender.com/api/users/signin", {
        username,
        email,
        password,
      });
      console.log(response);
      navigate("/");
      if (response.status === 201) {
        toast.success("User added successfully!- Now You need to Login");
      } else {
        toast.error("Failed to Sign-in.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 shadow-2xl gap-4">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-xl font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl md:text-2xl py-2 px-4"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl md:text-2xl py-2 px-4"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl md:text-2xl py-2 px-4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-xl md:text-2xl "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
