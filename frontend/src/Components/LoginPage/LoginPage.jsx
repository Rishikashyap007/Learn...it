
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useContext } from "react";
// import { mainContext } from "../../Context";
// import { toast } from "react-hot-toast";

// function Login() {
//   const navigate = useNavigate();
//   const userId = useContext(mainContext);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const rawData = new FormData(e.target);
//     const formData = Object.fromEntries(rawData);
//     console.log(formData);

//     if (!formData.email || !formData.password) {
//       console.log("Details are required");
//     } else {
//       try {
//         const response = await axios.post(
//           'https://learn-it-zl9y.onrender.com/api/users/login',
//           formData,
//           { withCredentials: true }
//         );
//         if (response.status === 201) {
//           toast.success("Logged-in successfully!");
//         } else {
//           toast.error("Failed to Logged-in.");
//         }
//         console.log("login Response", response);
//         console.log(response.data.data._id);

//         // Store token and user data in localStorage
//         localStorage.setItem('token', JSON.stringify(response.data.token));
//         localStorage.setItem('userid', JSON.stringify({
//           id: response.data.data._id,
//           name: response.data.data.username
//         }));

//         // Update context
//         userId.setID(response.data.data._id);
//         userId.setname(response.data.data.username);

//         // Navigate based on user role
//         if (!response.data.data.isAdmin) {
//           navigate('/');
//         } else {
//           navigate('/admin');
//         }
//       } catch (err) {
//         console.log(err);
//         toast.error("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <div className="container h-screen w-screen flex justify-center items-center">
//         <div className="login p-4 border-2 flex flex-col justify-center items-center gap-4 ">
//           <h1 className="text-2xl font-semibold"> Login </h1>

//           <form
//             onSubmit={(e) => handleLogin(e)}
//             className="flex flex-col justify-center items-center gap-4"
//           >
//             <input
//               type="email"
//               placeholder="Email..."
//               name="email"
//               className="text-xl py-2 px-4 border-2 rounded-md outline-none"
//             />
//             <input
//               type="password"
//               placeholder="password..."
//               name="password"
//               className="text-xl py-2 px-4 border-2 rounded-md outline-none"
//             />
//             <button
//               type="submit"
//               className="text-xl w-full py-2 px-4 border-2 rounded-md outline-none bg-slate-600 text-slate-50"
//             >
//               LOGIN
//             </button>
//           </form>

//           <p className="text-md font-normal">
//             Does not have any account{" "}
//             <Link
//               to={'/Sign_Up'}
//               className="text-md font-light text-blue-500 hover:text-blue-700"
//             >
//               create one
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { mainContext } from "../../Context";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const userId = useContext(mainContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const rawData = new FormData(e.target);
    const formData = Object.fromEntries(rawData);
    console.log(formData);

    if (!formData.email || !formData.password) {
      console.log("Details are required");
    } else {
      try {
        const response = await axios.post(
          'https://learn-it-zl9y.onrender.com/api/users/login',
          formData,
          { withCredentials: true }
        );
        if (response.status === 201) {
          toast.success("Logged-in successfully!");
        } else {
          toast.error("Failed to Logged-in.");
        }
        console.log("login Response", response);
        console.log(response.data.data._id);

        // Store token and user data in localStorage
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('userid', JSON.stringify({
          id: response.data.data._id,
          name: response.data.data.username
        }));

        // Update context
        userId.setID(response.data.data._id);
        userId.setname(response.data.data.username);

        // Navigate based on user role
        if (!response.data.data.isAdmin) {
          navigate('/');
        } else {
          navigate('/admin');
        }
      } catch (err) {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

          <form onSubmit={(e) => handleLogin(e)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl md:text-2xl py-2 px-4 outline-none "
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-xl md:text-2xl py-2 px-4 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-xl md:text-2xl border border-transparent rounded-md shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link
              to="/Sign_Up"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

