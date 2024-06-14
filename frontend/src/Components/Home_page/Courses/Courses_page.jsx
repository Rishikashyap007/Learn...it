

// // // import React, { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import axios from "axios";
// // // import { toast } from "react-hot-toast";

// // // const Courses = () => {
// // //   const [courses, setCourses] = useState([]);
  
// // //   useEffect(() => {
// // //     axios.get("https://learn-it-zl9y.onrender.com/api/users/courses")
// // //       .then((res) => setCourses(res.data.data))
// // //       .catch((err) => console.log(err));
// // //   }, []);

// // //   const userid = localStorage.getItem("userid");
// // //   const token = localStorage.getItem('token');
  
// // //   const handleCart = async (courseID) => {
// // //     axios.post("https://learn-it-zl9y.onrender.com/api/users/addtocart", { courseID, userid })
// // //       .then((res) => {
// // //         toast.success("Course added successfully...");
// // //         console.log(res);
// // //       })
// // //       .catch((err) => console.log(err));
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4 md:w-[80vw]">
// // //       <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
// // //         Let the journey of self-learning begin
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {courses.map((course, index) => (
// // //           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
// // //             <img
// // //               src={course.imgSrc}
// // //               alt={course.title}
// // //               className="w-full h-48 object-cover"
// // //             />
// // //             <div className="p-4">
// // //               <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
// // //               <div className="text-gray-700 mb-4">
// // //                 Price: <span className="text-red-600 font-semibold">{course.price} Rs</span>
// // //               </div>
// // //               <Link to={`/Courses/${course._id}`}>
// // //                 <button className="block w-full py-2 px-4 bg-purple-600 text-white rounded-md mb-2 hover:bg-purple-700 transition duration-300">
// // //                   Get this Course
// // //                 </button>
// // //               </Link>
// // //               {token && (
// // //                 <button
// // //                   onClick={() => handleCart(course._id)}
// // //                   className="block w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
// // //                 >
// // //                   Add to Cart
// // //                 </button>
// // //               )}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Courses;


// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import { toast } from "react-hot-toast";

// // const Courses = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [filteredCourses, setFilteredCourses] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("https://learn-it-zl9y.onrender.com/api/users/courses")
// //       .then((res) => {
// //         setCourses(res.data.data);
// //         setFilteredCourses(res.data.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   const userid = localStorage.getItem("userid");
// //   const token = localStorage.getItem("token");

// //   const handleCart = async (courseID) => {
// //     axios
// //       .post("https://learn-it-zl9y.onrender.com/api/users/addtocart", { courseID, userid })
// //       .then((res) => {
// //         toast.success("Course added successfully...");
// //         console.log(res);
// //       })
// //       .catch((err) => console.log(err));
// //   };

// //   const handleSearch = (e) => {
// //     const keyword = e.target.value.toLowerCase();
// //     setSearch(keyword);
// //     const results = courses.filter((course) =>
// //       course.category.toLowerCase().includes(keyword)
// //     );
// //     setFilteredCourses(results);
// //   };

// //   return (
// //     <div className="container mx-auto p-4 md:w-[80vw]">
// //       <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
// //         Let the journey of self-learning begin
// //       </h1>
// //       <div className="mb-6">
// //         <input
// //           type="text"
// //           value={search}
// //           onChange={handleSearch}
// //           placeholder="Search by category..."
// //           className="w-full p-2 border border-gray-300 rounded-md"
// //         />
// //       </div>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filteredCourses.map((course, index) => (
// //           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
// //             <img
// //               src={course.imgSrc}
// //               alt={course.title}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-4">
// //               <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
// //               <div className="text-gray-700 mb-4">
// //                 Price: <span className="text-red-600 font-semibold">{course.price} Rs</span>
// //               </div>
// //               <Link to={`/Courses/${course._id}`}>
// //                 <button className="block w-full py-2 px-4 bg-purple-600 text-white rounded-md mb-2 hover:bg-purple-700 transition duration-300">
// //                   Get this Course
// //                 </button>
// //               </Link>
// //               {token && (
// //                 <button
// //                   onClick={() => handleCart(course._id)}
// //                   className="block w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
// //                 >
// //                   Add to Cart
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Courses;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [coursesPerPage] = useState(6); // You can adjust the number of courses per page

//   useEffect(() => {
//     axios
//       .get("https://learn-it-zl9y.onrender.com/api/users/courses")
//       .then((res) => {
//         setCourses(res.data.data);
//         setFilteredCourses(res.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const userid = localStorage.getItem("userid");
//   const token = localStorage.getItem("token");

//   const handleCart = async (courseID) => {
//     axios
//       .post("https://learn-it-zl9y.onrender.com/api/users/addtocart", { courseID, userid })
//       .then((res) => {
//         toast.success("Course added successfully...");
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleSearch = (e) => {
//     const keyword = e.target.value.toLowerCase();
//     setSearch(keyword);
//     const results = courses.filter((course) =>
//       course.category.toLowerCase().includes(keyword)
//     );
//     setFilteredCourses(results);
//     setCurrentPage(1); // Reset to first page after search
//   };

//   // Calculate current courses
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container mx-auto p-4 md:w-[80vw]">
//       <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Let the journey of self-learning begin
//       </h1>
//       <div className="mb-6">
//         <input
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Search by category..."
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentCourses.map((course, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img
//               src={course.imgSrc}
//               alt={course.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
//               <div className="text-gray-700 mb-4">
//                 Price: <span className="text-red-600 font-semibold">{course.price} Rs</span>
//               </div>
//               <Link to={`/Courses/${course._id}`}>
//                 <button className="block w-full py-2 px-4 bg-purple-600 text-white rounded-md mb-2 hover:bg-purple-700 transition duration-300">
//                   Get this Course
//                 </button>
//               </Link>
//               {token && (
//                 <button
//                   onClick={() => handleCart(course._id)}
//                   className="block w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
//                 >
//                   Add to Cart
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <Pagination
//         coursesPerPage={coursesPerPage}
//         totalCourses={filteredCourses.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// const Pagination = ({ coursesPerPage, totalCourses, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="flex justify-center mt-4">
//         {pageNumbers.map((number) => (
//           <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
//             <button onClick={() => paginate(number)} className="px-4 py-2 bg-gray-200 rounded">
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Courses;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Circles } from 'react-loader-spinner';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6); // You can adjust the number of courses per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://learn-it-zl9y.onrender.com/api/users/courses")
      .then((res) => {
        setLoading(false);
        setCourses(res.data.data);
        setFilteredCourses(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  const handleCart = async (courseID) => {
    axios
      .post("https://learn-it-zl9y.onrender.com/api/users/addtocart", { courseID, userid })
      .then((res) => {
        toast.success("Course added successfully...");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    const results = courses.filter((course) =>
      course.category.toLowerCase().includes(keyword)
    );
    setFilteredCourses(results);
    setCurrentPage(1); // Reset to first page after search
  };

  // Calculate current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 md:w-[80vw]">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Let the journey of self-learning begin
      </h1>
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by category..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center ">
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
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
          <Pagination
            coursesPerPage={coursesPerPage}
            totalCourses={filteredCourses.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

const Pagination = ({ coursesPerPage, totalCourses, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
            <button onClick={() => paginate(number)} className="px-4 py-2 bg-gray-200 rounded">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Courses;
