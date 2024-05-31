import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const PaymentForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  const token = localStorage.getItem('token');
  const userId = JSON.parse(localStorage.getItem("userid")).id;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/coursedetails/${id}`)
      .then((res) => setCourse(res.data.courseDetails))
      .catch((err) => console.log(err));
  }, [id]);

  if (!course) {
    return <div className="flex justify-center items-center h-screen">Course not found</div>;
  }

  const amount = course.price;
  const currency = "INR";
  const receipt = "qwsaq1";

  const handlePayNowClick = async (e) => {
    if(token){

      const response = await fetch('http://localhost:5000/payment/order',{
        method: 'POST',

        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          receipt
        })
      })

      const order = await response.json();
      console.log(order);
  console.log(userId,course._id);
      
      var options = {
        "key": "rzp_test_HKShkcl2a1CZQG", // Enter the Key ID generated from the Dashboard
        amount : course.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        "name": "Learn...it", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async (response) =>{
          
          const body = {
            ...response,
          }

          const validateRes =  await fetch("http://localhost:5000/payment/verification",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            }
            ,
            body : JSON.stringify(body)
          })
          const res = await validateRes.json();
          console.log(res.message)
          if(res.message === "success"){
            // alert("payment successful");
            toast.success("Payment Successful!")
            await axios.post(`http://localhost:5000/api/users/enroll/${userId}`,
              {courseid: course._id,}
             )
             .then((res)=>
              {toast.success("congratulations! you succesfully Enrolled in this course")
              console.log(res)})
             .catch((err)=>{
              toast.error("somerghing went wrong! try again later")
              console.log(err)})
            navigate(`/video/${course._id}`)

          }
          else{
            navigate('/login')
          }

      },  
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
  });
  rzp1.open();
  e.preventDefault();
}

    else navigate('/Login');
};

 

  return (
    <div className="md:h-[80vh] flex flex-col items-center justify-center p-6 min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg md:w-2/3 lg:w-1/2 flex flex-col justify-between items-center">
        <h2 className="text-lg font-semibold mb-4">Make a payment to Buy Course</h2>
        <div className="mb-4 w-full">
          <img src={course.imgSrc} alt={course.title} className="md:w-full md:h-48 object-cover rounded-lg md:mb-4" />
          <div className="text-center">
            <span className="font-semibold text-xl md:text-2xl">Course Title:</span>
            <h1 className="text-xl md:text-3xl font-bold mb-4">{course.title}</h1>
            <span className="font-semibold">Amount to Pay:</span>
            <span className="ml-2 text-red-500 md:text-2xl font-medium">{course.price} Rs</span>
          </div>
        </div>
        <button
          onClick={handlePayNowClick}
          className="w-full bg-red-600 text-white py-3 rounded-md font-semibold"
        >
          Pay Now
        </button>
      </div>
      
    </div>
  );
};

export default PaymentForm;
