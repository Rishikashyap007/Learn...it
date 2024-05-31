import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { mainContext } from "../../Context";
import CartProducts from "./CartProducts";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import './Cart.css';
function Cart() {
  const [courses, setcourses] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userid"));
  // console.log(userId.id)
  useEffect(() => {
    axios
      .get(`https://learn-it-zl9y.onrender.com/api/users/cartitems/${userId.id}`)
      .then((res) => setcourses(res.data.data))
      .catch((err) => console.log(err));
  }, [courses]);
  return (
    <>
      <div className="flex justify-center items-center p-4 ">
        <div className="dot">

        </div>
        <div className="gap-4 md:w-[80%] flex flex-col justify-center items-center">
          {courses.length===0? (
            <div className="h-[80vh] w-[100%] flex justify-center items-center flex-col">
            <p className="text-xl text-black text-center">
              {" "}
              No Courses added{" "}
            </p>
            <Link to={'/Courses'}>
            <button className="py-2 px-4 bg-red-500 text-white text-xl font-semibold"> Add Courses</button>
            </Link>
          </div>
          ) : (
            courses.map((course) => <CartProducts course={course} />)
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
