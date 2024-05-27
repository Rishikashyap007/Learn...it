import React from 'react'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'


function Revenue() {
  return (
    <>
      <AdminHeader />
       <div className='flex flex-col md:flex-row gap-2'>
         <Sidebar />
          <div className='py-6 px-4 text-2xl'>
             Revenue
          </div>
       </div>
    </>
  )
}

export default Revenue