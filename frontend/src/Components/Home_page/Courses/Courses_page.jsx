

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/users/courses")
      .then((res) => setCourses(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem('token');
  
  const handleCart = async (courseID) => {
    axios.post("http://localhost:5000/api/users/addtocart", { courseID, userid })
      .then((res) => {
        toast.success("Course added successfully...");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto p-4 md:w-[80vw]">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Let the journey of self-learning begin
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <div className="text-gray-700 mb-4">
                Price: <span className="text-red-600 font-semibold">{course.price} Rs</span>
              </div>
              <Link to={`/Courses/${course._id}`}>
                <button className="block w-full py-2 px-4 bg-purple-600 text-white rounded-md mb-2 hover:bg-purple-700 transition duration-300">
                  Get this Course
                </button>
              </Link>
              {token && (
                <button
                  onClick={() => handleCart(course._id)}
                  className="block w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
