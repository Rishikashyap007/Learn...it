    import './Home.css'
    
    
    
    import Accordian from './Components/Home_Page_FAQ/FAQ'
    import Home_page from './Components/Home_page/Home_page'
    
    import {Link }from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


    function Home(){

    
            // useEffect(()=>{
            //     axios.get('https://learn-it-zl9y.onrender.com/api/users/allusers')
            //     .then(res=>console.log(res))
            //     .catch((err)=>console.log(err))
            // },[])
        
        return(
              <>
              <div className='Home_div'>
              <div className='home_body'>
              <Home_page/>
              </div>
              
              
          
          <Accordian/>
          </div>
              </>
        )
    }
    export default Home