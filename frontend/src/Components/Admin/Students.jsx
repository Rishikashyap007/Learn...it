import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function Students() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://learn-it-zl9y.onrender.com/api/users/allusers")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="flex flex-col md:flex-row gap-2">
        <Sidebar />
        <div className="text-2xl flex gap-4 flex-wrap p-4 md:justify-center md:items-center">
          {users.length > 0 ? (
            users.map((user) =>
              user.isAdmin ? null : (
                <div
                  key={user.id}
                  className="border-2 p-4 h-64 w-64 flex flex-col justify-start items-center shadow-lg rounded-md bg-white"
                >
                  <img
                    src={user.profilepicture}
                    alt={`${user.username}'s profile`}
                    className="w-24 h-24 object-cover rounded-full mb-4"
                  />
                  <p className="text-lg font-semibold">{user.username}</p>
{/* 
                  <Link to={`/profile/${user._id}`}>
                    <button className=" py-2 px-4 bg-blue-500 text-xl text-white"> View Details </button>
                  </Link> */}
                </div>
              )
            )
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Students;
