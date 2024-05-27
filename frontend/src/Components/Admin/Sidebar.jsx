// import React from "react";
// import { Link } from "react-router-dom";
//  // Assuming you might have custom CSS too

// const Sidebar = () => {
//   return (
//     <div className="sidebar-cont bg-gray-100 border-r-2 border-gray-300 h-screen  md:px-6 md:py-2 text-2xl">
     
//         <Link to={'/'}>
//         <div className="sidebar-menus flex items-center p-3 mb-3 hover:bg-gray-200 rounded-lg">
//           <span className="material-symbols-outlined mr-3">team_dashboard</span>
//           <p className="hidden md:block">Courses</p>
//         </div>
//         </Link>
//         <Link to={'/students'}>
//         <div className="sidebar-menus flex items-center p-3 mb-3 hover:bg-gray-200 rounded-lg">
//           <span className="material-symbols-outlined mr-3">receipt_long</span>
//           <p className="hidden md:block"> Students </p>
//         </div>
//         </Link>
//         <Link to={'/revenue'}>
//         <div className="sidebar-menus flex items-center p-3 mb-3 hover:bg-gray-200 rounded-lg">
//           <span className="material-symbols-outlined mr-3">team_dashboard</span>
//           <p className="hidden md:block"> Revenue </p>
//         </div>
//         </Link>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-cont bg-gray-100 border-r-2 border-gray-300 md:h-screen md:px-6 md:py-2 md:flex md:flex-col">
      <div className="flex flex-row md:flex-col justify-between">
      <Link to={'/admin'} className="flex items-center p-3 mb-3 hover:bg-gray-200 rounded-lg md:flex-row md:justify-start">
        <span className="material-symbols-outlined mr-3">team_dashboard</span>
        <p className="hidden md:block text-xl font-semibold">Courses</p>
      </Link>
      <Link to={'/students'} className="flex items-center p-3 mb-3 hover:bg-gray-200 rounded-lg md:flex-row md:justify-start">
        <span className="material-symbols-outlined mr-3">receipt_long</span>
        <p className="hidden md:block text-xl font-semibold">Students</p>
      </Link>
      <Link to={'/revenue'} className="flex items-center p-3 mb-3 hover:bg-gray-200 rounded-lg md:flex-row md:justify-start">
        <span className="material-symbols-outlined mr-3">team_dashboard</span>
        <p className="hidden md:block text-xl font-semibold">Revenue</p>
      </Link>
      </div>
    </div>
  );
};

export default Sidebar;
