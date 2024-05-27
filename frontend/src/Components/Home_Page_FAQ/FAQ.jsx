import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fourthpart">
      <p className="p1">Frequently asked questions</p>
      <div className="layout bg-black text-white w-full">
        {faqData.map((faq, index) => (
          <div
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion__question bg-transparent">
              <p >{faq.question}</p>
            </div>
            <div className="accordion__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const faqData = [
  {
    question: "What is Pay after Placement?",
    answer:
      "Pay After Placement is a payment model where students cover tuition fees after securing a job. Instead of upfront payments, students agree to pay a portion of their salary or a fixed amount post-employment. This approach aims to alleviate financial barriers to education and aligns tuition costs with students' career success. However, it's essential for students to understand and agree to the terms of repayment",
  },
  {
    question: "Do you get people placed?",
    answer:
      `on our e-learning platform reflects interest in our job placement assistance. We offer comprehensive support to help learners secure relevant positions post-completion. While we cannot guarantee placement, we equip individuals with skills and resources to enhance their employability. Success in finding employment depends on various factors, including market demand and individual efforts.`

  },
  {
    question: "How to get funding by US?",
    answer:
      "We give chance to our top students to get funded by us. The funding amount can go upto 20Lakh",
  },
  {
    question: "Is it worth to pursue a course with US?",
    answer:
      "Yes, pursuing a course with Learn...it can be beneficial for your e-learning platform. Through their programs, you'll gain valuable insights into creating a compelling business plan and accessing funding opportunities. Engaging with mentors and participating in pitch competitions can significantly enhance your chances of securing financial support and accelerating your platform's growth. However, success ultimately depends on your commitment and ability to leverage the resources",
  },
  
];

export default FAQ;