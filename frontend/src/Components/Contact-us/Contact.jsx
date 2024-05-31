// import React, { useState } from "react";
// import "./contact.css";
// import officeIcon from "./images/office-png.png";
// import locationIcon from "./images/location.png";
// import mailIcon from "./images/mail.png";
// import callIcon from "./images/call.png";
// import facebookIcon from "./images/1.png";
// import instagramIcon from "./images/3.png";
// import twitterIcon from "./images/2.png";
// import linkedInIcon from "./images/5.png";


// import axios from "axios";
// import { toast } from "react-hot-toast";

// const Contactus = () => {

//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     message: "",
//   })

//   const { firstName, lastName, email, mobile, message } = formData

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     setLoading(true);
//     const toastId = toast.loading("Loading...")
//     try {
//       const res = await axios.post("https://ten-one.vercel.app/api/v1/contact", formData);

//       toast.success("Email Sent Successfully")

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         message: "",
//       });

//     } catch (error) {
//       console.log("Error: ", error.message);

//       toast.error("Could Not Send Email")
//     }


//     setLoading(false);
//     toast.dismiss(toastId)

//   }


//   return (
//     <>
//       <section className="contactus_section">
//         <div className="contactUs_container">
//           <div className="contactUs_contactInfo">
//             <div>
//               <h2>Contact Info</h2>
//               <ul className="contactUs_info">
//                 <li>
//                   <span>
//                     <img src={officeIcon} alt="Office Icon" />
//                   </span>{" "}
//                   {/* Enter company address Here */}
//                   <span>
//                     The Entrepreneurship <br />
//                     Network(TEN)
//                   </span>
//                 </li>
//                 <li>
//                   <span>
//                     <img src={locationIcon} alt="Location Icon" />
//                   </span>{" "}
//                   {/* Enter company address Here */}
//                   <span>
//                     Delhi, India
//                     <br />
//                     110001
//                   </span>
//                 </li>
//                 <li>
//                   <span>
//                     <img src={mailIcon} alt="Mail Icon" />
//                   </span>
//                   <span>
//                     <a href="mailto:@gmail.com">info@entrepreneurshipnetwork.net</a>
//                   </span>{" "}
//                   {/* Enter company gamil Here */}
//                 </li>
                
//               </ul>
//             </div>
//             <ul className="contactUs_sci">
//               <li>
//                 <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
//                   <img src={facebookIcon} alt="Facebook Icon" />
//                 </a>
//               </li>{" "}
//               {/* Enter Facebook Link Here */}
//               <li>
//                 <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
//                   <img src={instagramIcon} alt="Instagram Icon" />
//                 </a>
//               </li>{" "}
//               {/* Enter Instagram Link Here */}
//               <li>
//                 <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
//                   <img src={twitterIcon} alt="Twitter Icon" />
//                 </a>
//               </li>{" "}
//               {/* Enter Twitter Link Here */}
//               <li>
//                 <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
//                   <img src={linkedInIcon} alt="LinkedIn Icon" />
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="contactUs_contactForm">
//             <h2>Send a Message</h2>
//             <form onSubmit={handleSubmit} className="contactUs_formBox">
//               <div className="contactUs_inputBox w50">
//                 <input type="text" onChange={handleOnChange} value={firstName} name="firstName" required />
//                 <span>First Name</span>
//               </div>
//               <div className="contactUs_inputBox w50">
//                 <input type="text" onChange={handleOnChange} value={lastName} name="lastName" required />
//                 <span>Last Name</span>
//               </div>
//               <div className="contactUs_inputBox w50">
//                 <input type="email" onChange={handleOnChange} value={email} name="email" required />
//                 <span>Email Address</span>
//               </div>
//               <div className="contactUs_inputBox w50">
//                 <input type="text" minLength={10} maxLength={10} onChange={handleOnChange} value={mobile} name="mobile" required />
//                 <span>Mobile Number</span>
//               </div>
//               <div className="contactUs_inputBox w100">
//                 <textarea onChange={handleOnChange} value={message} name="message" required></textarea>
//                 <span>Write your message here...</span>
//               </div>
//               <div className="contactUs_inputBox w100">
//                 <input type="submit" value="Send" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contactus;


import React, { useState } from "react";
// import "./style.css";
import officeIcon from "./images/office-png.png";
import locationIcon from "./images/location.png";
import mailIcon from "./images/mail.png";
import facebookIcon from "./images/1.png";
import instagramIcon from "./images/3.png";
import twitterIcon from "./images/2.png";
import linkedInIcon from "./images/5.png";

import axios from "axios";
import { toast } from "react-hot-toast";

const Contactus = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const { firstName, lastName, email, mobile, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      const res = await axios.post("http://localhost:5000/api/users/contact", formData);

      toast.success("Email Sent Successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.log("Error: ", error.message);

      toast.error("Could Not Send Email");
    }

    setLoading(false);
    toast.dismiss(toastId);
  };

  return (
    <section className="contactus_section py-12 px-4 bg-gray-100">
      <div className="contactUs_container mx-auto max-w-7xl flex flex-col lg:flex-row gap-12">
        <div className="contactUs_contactInfo lg:w-1/3">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
            <ul className="contactUs_info space-y-6">
              <li className="flex items-center space-x-4">
                <img src={officeIcon} alt="Office Icon" className="w-6 h-6" />
                <span className="text-lg">
                 Learn..It
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <img src={locationIcon} alt="Location Icon" className="w-6 h-6" />
                <span className="text-lg">
                  Punjab, India
                  <br />
                  141001
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <img src={mailIcon} alt="Mail Icon" className="w-6 h-6" />
                <span className="text-lg">
                  <a href="mailto:info@entrepreneurshipnetwork.net" className="text-blue-500">info@learnit.net</a>
                </span>
              </li>
            </ul>
          </div>
          <ul className="contactUs_sci flex space-x-4 mt-8">
            <li>
              <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                <img src={facebookIcon} alt="Facebook Icon" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                <img src={instagramIcon} alt="Instagram Icon" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                <img src={twitterIcon} alt="Twitter Icon" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/the-entrepreneurship-network/about/">
                <img src={linkedInIcon} alt="LinkedIn Icon" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactUs_contactForm lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="contactUs_formBox grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="contactUs_inputBox w-full">
              <input
                type="text"
                onChange={handleOnChange}
                value={firstName}
                name="firstName"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <span className="block mt-1 text-gray-600">First Name</span>
            </div>
            <div className="contactUs_inputBox w-full">
              <input
                type="text"
                onChange={handleOnChange}
                value={lastName}
                name="lastName"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <span className="block mt-1 text-gray-600">Last Name</span>
            </div>
            <div className="contactUs_inputBox w-full">
              <input
                type="email"
                onChange={handleOnChange}
                value={email}
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <span className="block mt-1 text-gray-600">Email Address</span>
            </div>
            <div className="contactUs_inputBox w-full">
              <input
                type="text"
                minLength={10}
                maxLength={10}
                onChange={handleOnChange}
                value={mobile}
                name="mobile"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <span className="block mt-1 text-gray-600">Mobile Number</span>
            </div>
            <div className="contactUs_inputBox w-full md:col-span-2">
              <textarea
                onChange={handleOnChange}
                value={message}
                name="message"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
              <span className="block mt-1 text-gray-600">Write your message here...</span>
            </div>
            <div className="contactUs_inputBox w-full md:col-span-2">
              <input
                type="submit"
                value="Send"
                className="w-full p-2 bg-purple-500 text-white font-bold rounded-md cursor-pointer hover:bg-blue-600 transition"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
