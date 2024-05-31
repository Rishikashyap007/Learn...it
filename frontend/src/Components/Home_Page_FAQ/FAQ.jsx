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
              <p>{faq.question}</p>
            </div>
            {activeIndex === index && (
              <div className="accordion__answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is Learn...it?",
    answer:
      "Learn...it is an advanced eLearning platform that offers a variety of courses across different domains including technology, business, and personal development. Our goal is to provide practical skills and knowledge through high-quality curriculum and experienced instructors."
  },
  {
    question: "How does the eLearning platform work?",
    answer:
      "Our eLearning platform provides an interactive learning experience with video lectures, quizzes, assignments, and real-time feedback. Students can access the content at their own pace and participate in live sessions with instructors and peers."
  },
  {
    question: "What types of courses does Learn...it offer?",
    answer:
      "Learn...it offers courses in various fields such as programming, data science, digital marketing, entrepreneurship, and more. Each course is designed to provide practical skills that are directly applicable to the industry. Check our course catalog for more details."
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Yes, many of our courses are self-paced, allowing you to learn at your own speed. However, we also offer instructor-led courses and live sessions for a more structured learning experience."
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll in a course, simply visit our website, browse the course catalog, select the course you are interested in, and follow the enrollment instructions. You will need to create an account if you do not have one already."
  },
  {
    question: "What support is available to students?",
    answer:
      "Learn...it offers comprehensive support including access to instructors, discussion forums, and technical support. Additionally, we provide career services such as resume reviews and interview preparation to help you achieve your career goals."
  },
  {
    question: "Is there a certificate upon course completion?",
    answer:
      "Yes, upon successful completion of a course, you will receive a certificate that you can share with potential employers and add to your professional portfolio."
  },
];

export default FAQ;
