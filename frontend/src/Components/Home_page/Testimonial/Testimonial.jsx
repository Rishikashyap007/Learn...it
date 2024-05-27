import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      image:
        "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png",
      text: "The Integrated Learninng program has been a revolution for me . From coding challenges to immersive projects,every module is designed to push our boundaries. It's not just about learning languages it's about cultivating a mindset that can adapt to any tech challenge",
      name: "Ishika aggrawal",
      role: "Student",
    },
    {
      image:
        "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png",
      text: "I Joined the program with the dream of creating app that makes a difference and hands-on experience and mentorship here have fueled my creativity.",
      name: "Shurti Bhagat",
      role: "Student",
    },
    {
      image:
        "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png",
      text: "The Integrated Learninng program has been a revolution for me . From coding challenges to immersive projects,every module is designed to push our boundaries. It's not just about learning languages it's about cultivating a mindset that can adapt to any tech challenge.",
      name: "Rohit Sharma",
      role: "Student",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="testimonial-main-cont">
        <div className="testimonial">
          <h2>Our Satisfied Students</h2>
          <div className="testimonial-content">
            <div className="student-image">
              <img src={testimonials[currentTestimonial].image} alt="Student" />
            </div>
            <div className="testimonial-quote">
              <blockquote>
                <p>{testimonials[currentTestimonial].text}</p>
              </blockquote>
              <p className="student-name">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="student-role">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
            <div className="navigation">
              <button className="prev-button" onClick={handlePrevClick}>
                &lt;
              </button>
              <button className="next-button" onClick={handleNextClick}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
