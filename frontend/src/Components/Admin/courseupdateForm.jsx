import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";

function CourseUpdateForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imgSrc: "",
    category: "",
    video: {
      title: "",
      description: "",
      videoUrl: "",
    },
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/coursedetails/${id}`)
      .then((res) => {
        const courseDetails = res.data.courseDetails;
        setCourse(courseDetails);
        setFormData({
          title: courseDetails.title,
          description: courseDetails.description,
          price: courseDetails.price,
          imgSrc: courseDetails.imgSrc,
          category: courseDetails.category,
          video: {
            title: courseDetails.video?.title || "",
            description: courseDetails.video?.description || "",
            videoUrl: courseDetails.video?.videoUrl || "",
          },
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('video.')) {
      const videoField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        video: {
          ...prev.video,
          [videoField]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/courseupdate/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Course updated successfully!");
        navigate("/admin");
      } else {
        toast.error("Failed to update course.");
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
            <h2 className="text-2xl font-semibold mb-4">Update Course</h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto border-2 shadow-xl px-4 py-4 rounded-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-md font-medium text-gray-700"
                >
                  Title:
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
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="video.title"
                  className="block text-md font-medium text-gray-700"
                >
                  Video Title:
                </label>
                <input
                  type="text"
                  id="video.title"
                  name="video.title"
                  value={formData.video.title}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="video.description"
                  className="block text-md font-medium text-gray-700"
                >
                  Video Description:
                </label>
                <textarea
                  id="video.description"
                  name="video.description"
                  value={formData.video.description}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="video.videoUrl"
                  className="block text-md font-medium text-gray-700"
                >
                  Video URL:
                </label>
                <input
                  type="text"
                  id="video.videoUrl"
                  name="video.videoUrl"
                  value={formData.video.videoUrl}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseUpdateForm;
