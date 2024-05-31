// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://learn-it-zl9y.onrender.com/api/users/userbyId/${id}`)
//       .then((res) => {
//         setUser(res.data.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError(err);
//         setLoading(false);
//       });
//   }, [id]);
//   // console.log(user.coursesEnrolled);
//   //  if(user){
//   //   axios.get(`http://localhost:500/api/users/coursedetails/${user.course._id}`)
//   //   .then
//   //  }
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!user) {
//     return <p>No user found</p>;
//   }

//   return (
//     <>
//       <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:h-32 p-4">
//         <div className="h-24 w-24">
//           <img
//             src={user.profilepicture}
//             alt={user.username}
//             className="rounded-full overflow-hidden w-full h-full"
//           />
//         </div>
//         <div>
//           <p className="text-2xl font-semibold text-center md:text-left">{user.username}</p>
//         </div>
//       </div>
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="text-2xl font-semibold p-2 border-b-2">Courses you Enrolled in</h1>
//         <div className="mt-4 w-full px-4 md:px-0 md:w-2/3 lg:w-1/2 flex flex-col md:flex-row">
//           {user.coursesEnrolled && user.coursesEnrolled.length > 0 ? (
//             user.coursesEnrolled.map((course) => (
//               <div
//                 key={course._id}
//                 className="border-2 bg-black text-white rounded-lg p-2 mb-2 w-full flex flex-col gap-4"
//               >
//                 <img src={course.imgSrc} alt="" />
//                 <p className="text-2xl font-semibold text-center">{course.title}</p>
//                   <Link to={`/video/${course._id}`}>
//                   <button
//                   className="w-[100%] py-2 px-4 bg-purple-600 text-white text-xl"
//                   > Start Learning </button>
//                   </Link>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-2xl w-full flex flex-col gap-4 justify-center items-center">
//               <p>Currently, you are not enrolled in any course.</p>
//               <Link to="/Courses" className="px-4 py-2 text-xl">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Press to continue</button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Profile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://learn-it-zl9y.onrender.com/api/users/userbyId/${id}`)
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">No user found</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:h-32 p-4 bg-gray-100 rounded-lg shadow-lg">
        <div className="h-24 w-24">
          <img
            src={user.profilepicture}
            alt={user.username}
            className="rounded-full overflow-hidden w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold text-center md:text-left">{user.username}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-3xl font-semibold p-2 border-b-4 border-purple-600">Courses you Enrolled in</h1>
        <div className="mt-8 w-full px-4 md:px-0 md:w-2/3 lg:w-1/2">
          {user.coursesEnrolled && user.coursesEnrolled.length > 0 ? (
            user.coursesEnrolled.map((course) => (
              <div
                key={course._id}
                className="border-2 bg-gray-800 text-white rounded-lg p-4 mb-4 w-full shadow-lg"
              >
                <img src={course.imgSrc} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
                <p className="text-2xl font-semibold text-center mt-4">{course.title}</p>
                <div className="flex justify-center mt-4">
                  <Link to={`/video/${course._id}`} className="w-full">
                    <button className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white text-xl rounded-b-lg">
                      Start Learning
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-2xl w-full flex flex-col gap-4 justify-center items-center">
              <p>Currently, you are not enrolled in any course.</p>
              <Link to="/Courses" className="px-4 py-2 text-xl">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Browse Courses</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
// 
