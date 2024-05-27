// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

// function AllCourses() {
//   const [courses, setCourses] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/users/courses")
//       .then((res) => setCourses(res.data.data))
//       .catch((err) => console.log(err));
//   }, [courses]);

//   const handledelete = (id) => {
//     // console.log(id);
//     axios
//       .delete(`http://localhost:5000/api/users/coursedelete/${id}`)
//       .then((res) => {
//         // console.log(res);
//         toast.success("Course deleted successfully!");
//         setCourses(courses.filter((course) => course._id !== id));
//         // Here you may want to update the courses state to reflect the deletion
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Failed to delete course.");
//       });
//   };

//   // const handleUpdate = (id) => {
//   //   axios
//   //     .post(`http://localhost:5000/api/users/courseupdate/${id}`,{})
//   //     .then((res) => console.log(res))
//   //     .catch((err) => console.log(err));
//   // };
//   return (
//     <>
//       <div className="p-4 flex flex-col gap-4 ">
//         <div className=" flex justify-between items-center p-3 border-2 rounded-md px-2 ">
//           <h1 className="text-2xl font-medium"> Courses </h1>
//           <Link to={"/addcourses"}>
//             {" "}
//             <button> Add Courses </button>{" "}
//           </Link>
//         </div>
//         <div className="flex flex-col gap-4">
//           {courses
//             ? courses.map((course) => (
//                 <div className=" md:w-[80vw] px-4 py-2 border-2 flex gap-4 justify-between items-center">
//                   <div className=" flex flex-1 flex-col gap-2">
//                     {/* <h1 className='text-2xl font-semibold '> Title </h1> */}
//                     <p className=" text-xl font-normal"> {course.title}</p>
//                   </div>
//                   <div className=" flex flex-1 flex-col gap-2">
//                     {/* <h1> category </h1> */}
//                     <p> {course.category}</p>
//                   </div>
//                   <div className="flex gap-4 ">
//                     <Link to={`/update/${course._id}`}>
//                     <button 
//                     className="text-white text-xl bg-blue-600"
//                     >
//                       {" "}
//                       update{" "}
//                     </button>
//                     </Link>
//                     <button
//                       onClick={(id) => handledelete(course._id)}
//                       className="bg-red-500 text-white text-xl py-2 px-4"
//                     >
//                       {" "}
//                       delete
//                     </button>
//                   </div>
//                 </div>
//               ))
//             : ""}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllCourses;


import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/courses")
      .then((res) => setCourses(res.data.data))
      .catch((err) => console.log(err));
  }, [courses]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/coursedelete/${id}`)
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
