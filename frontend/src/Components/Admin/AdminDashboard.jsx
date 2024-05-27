import React from 'react'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import AllCourses from './AllCourses'


function AdminDashboard() {
  return (
    <>
    <div className=''>
      
    <AdminHeader />
       <div className='flex flex-col md:flex-row gap-2 '>
         <Sidebar />
         <AllCourses />
       </div>
    </div>
    </>
  )
}

export default AdminDashboard
