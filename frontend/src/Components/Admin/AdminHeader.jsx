import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function AdminHeader() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/')
    toast.success("Admin Logout successfully!")
  }
  return (
    <>
      <div className="header-container h-10vh px-6 py-4 w-full text-2xl text-white bg-purple-500  font-bold flex justify-between items-center">
         Admin DashBoard
      { token?
        <button 
        className='text-xl py-2 px-4 bg-green-500' 
        onClick={handleLogout}> Logout </button>
       :""}
      </div>
    </>
  );
}

export default AdminHeader;
