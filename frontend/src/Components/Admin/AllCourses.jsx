

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://learn-it-zl9y.onrender.com/api/users/courses")
      .then((res) => setCourses(res.data.data))
      .catch((err) => console.log(err));
  }, [courses]);

  const handleDelete = (id) => {
    axios
      .delete(`https://learn-it-zl9y.onrender.com/api/users/coursedelete/${id}`)
      .then((res) => {
        toast.success("Course deleted successfully!");
        setCourses(courses.filter((course) => course._id !== id));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete course.");
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center border-b-2 pb-3">
        <h1 className="text-2xl font-medium">Courses</h1>
        <Link to="/addcourses">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Courses
          </button>
        </Link>
      </div>
      <div className="mt-4 grid gap-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="border-2 rounded-md p-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4"
          >
            <div className="col-span-2">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.category}</p>
            </div>
            <div className="flex justify-end space-x-2">
              <Link to={`/update/${course._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Update
                </button>
              </Link>
              <button
                onClick={() => handleDelete(course._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
