import React from "react";
import { useDispatch } from "react-redux";
import { removefromCart } from "../../Features/CartSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function CartProducts({ course }) {
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("userid")).id;

  const handleremovefromCart = async (courseID) => {
    try {
      const response = await axios.post(
        `https://learn-it-zl9y.onrender.com/api/users/remove/${courseID}`,
        {
          userId,
        }
      );
      console.log(response);
      toast.success("Removed Successfully!");
    } catch (error) {
      console.log(error);
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <>
      {course ? (
        <div className="shadow-xl w-full md:w-[80%] lg:w-[40%] mx-auto my-4 rounded-lg overflow-hidden bg-white">
          <div className="flex flex-col gap-4 p-4 justify-between items-center border-b-2">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-[200px] md:h-[300px] object-cover"
            />
            <p className="text-xl md:text-2xl font-semibold text-center">{course.title}</p>
            <p className="text-lg md:text-xl font-semibold text-center">
              Price:{" "}
              <span className="text-xl md:text-2xl text-red-600 font-semibold">
                {course.price}
              </span>{" "}
              Rs
            </p>
          </div>
          <div className="btns flex flex-col gap-2 w-full p-4">
            <Link to={`/payment/${course._id}`} className="w-full">
              <button className="w-full text-lg md:text-xl bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
                Buy Now
              </button>
            </Link>
            <button
              onClick={() => handleremovefromCart(course._id)}
              className="w-full text-lg md:text-xl bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xl text-black text-center">No Courses added</p>
        </div>
      )}
    </>
  );
}

export default CartProducts;
