import React from "react";
import './footer.css';
import youTube from './Youtube.avif';
import linkdin from '../assests/linkdin.png';
import {Link} from 'react-router-dom';

const Footer=()=>{
    return (
        <div className="footer">
        <div className="sb__footer section__padding">
        <div className="sb__footer-links">
        <div className="sb__footer-links_div">
        <h4>Free Content</h4>
        
           
        
        {/* <Link to="https://ailabs.entrepreneurshipnetwork.net/">
            <p>TEN AI labs</p>
        </Link> */}
        <Link to="https://hrportal.entrepreneurshipnetwork.net/#Training-sec">
            <p>Training</p>
        </Link>
        </div>
        
        <div className="sb__footer-links_div">
        <h4>Internship</h4>
        <Link to="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site">
            <p>Apply For Internship</p>
        </Link>
        {/* <Link to="https://www.expertia.ai/entrepreneurshipnetwork-net?utm_source=corp_site">
            <p>Hiring</p>
        </Link> */}
        </div>
        
        <div className="sb__footer-links_div">
        <h4>Policy and Sitemap</h4>
        <Link to="terms">
            <p>Terms & Conditions</p>
        </Link>
        <Link to="/privacy">
            <p>Privacy  Policy</p>
        </Link>
        {/* <Link to="terms">
            <p>Sitemap</p>
        </Link> */}
        </div>
        <div className="sb__footer-links_div">
        <h4>About us</h4>
        {/* <Link to="/Our_layer">
            <p>Our Layers</p>
        </Link> */}
        <Link to="/About-us">
            <p>About us</p>
        </Link>
        </div>
        <div className="sb__footer-links_div">
            <h4>Social</h4>
            <div className="socialmedia">
                <p><a href='https://youtube.com/@theentrepreneurshipnetwork3348?feature=shared' target='_blank'><i className="fa-brands fa-youtube text-red-700 text-5xl p-2"/></a></p>
                <p><a href='https://www.linkedin.com/company/the-entrepreneurship-network/' target='_blank'><i className="fa-brands fa-linkedin text-sky-500 text-5xl p-2"></i></a></p>
             
            </div>
        </div>
        </div>
      <hr></hr>
      <div className="sb__footer-below">
        <div className="sb__footer-copyright">
            <p>
                 @{new Date().getFullYear()} Learn..it. all right reserved
            </p>
        </div>
        <div className="sb__footer-below-links">
            <Link to="terms"><div><p>Terms & Conditions</p></div></Link>
            <Link to="terms"><div><p>Security</p></div></Link>
            {/* <Link to="terms"><div><p>Cookie Declaration</p></div></Link> */}
           
        </div>
      </div>
        </div>


        </div>
    )
}

export default Footer;