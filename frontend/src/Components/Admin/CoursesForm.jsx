

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function CourseForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imgSrc: "",
    category: "",
    video: {
      title: "",
      description: "",
      videoUrl: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVideoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      video: {
        ...formData.video,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://learn-it-zl9y.onrender.com/api/users/course",
        formData
      );
      if (response.status === 201) {
        toast.success("Course added successfully!");
        navigate("/admin");
      } else {
        toast.error("Failed to add course.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div>
        <AdminHeader />
        <div className="flex flex-col md:flex-row gap-2">
          <Sidebar />
          <div className="md:w-[60vw] container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto border-2 shadow-xl px-4 py-4 rounded-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-md font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-md font-medium text-gray-700"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-md font-medium text-gray-700"
                >
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="imgSrc"
                  className="block text-md font-medium text-gray-700"
                >
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imgSrc"
                  name="imgSrc"
                  value={formData.imgSrc}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-md font-medium text-gray-700"
                >
                  Category:
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* Video Fields */}
              <h2 className="text-lg font-semibold mb-2">Video Details</h2>
              <div className="mb-4">
                <label
                  htmlFor="videoTitle"
                  className="block text-md font-medium text-gray-700"
                >
                  Video Title:
                </label>
                <input
                  type="text"
                  id="videoTitle"
                  name="title"
                  value={formData.video.title}
                  onChange={handleVideoChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="videoDescription"
                  className="block text-md font-medium text-gray-700"
                >
                  Video Description:
                </label>
                <textarea
                  id="videoDescription"
                  name="description"
                  value={formData.video.description}
                  onChange={handleVideoChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="videoUrl"
                  className="block text-md font-medium text-gray-700"
                >
                  Video URL:
                </label>
                <input
                  type="text"
                  id="videoUrl"
                  name="videoUrl"
                  value={formData.video.videoUrl}
                  onChange={handleVideoChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseForm;

