import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Circles } from 'react-loader-spinner';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(`https://learn-it-zl9y.onrender.com/api/users/coursedetails/${id}`);
        setCourse(res.data.courseDetails);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const handleCart = async (courseID) => {
    try {
      const res = await axios.post("https://learn-it-zl9y.onrender.com/api/users/addtocart", { courseID, userid });
      toast.success("Course added successfully...");
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Circles color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  if (!course) {
    return <div className="text-center mt-8 text-xl">Course not found</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="md:w-[90vw] w-full bg-white p-6 md:p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center">
          <div className="flex justify-center items-center">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-700">
                {course.category}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
            <div className="text-2xl font-bold text-gray-800 mt-4">
              Price: <span className="text-red-600">{course.price} Rs</span>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:space-x-4">
              <Link to={`/payment/${course._id}`}>
                <button className="py-3 px-6 bg-red-500 text-xl text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 w-full md:w-auto">
                  Buy Now
                </button>
              </Link>
              {token && (
                <button
                  onClick={() => handleCart(course._id)}
                  className="py-3 px-6 bg-blue-500 text-xl text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full md:w-auto"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
