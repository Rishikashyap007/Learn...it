import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './Components/footer/App_Footer'
function Layout(){
    return(
        <>
    <Navbar/>
    <Outlet/> 
    <Footer/>
    </>
    )
}
export default Layout

