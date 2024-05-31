
import React from "react";
// import "./style.css";

const AboutUs = () => {
  return (
    <div className="content-wrapper">
      <section className="region py-5 md:py-10 bg-gray-200">
        <div className="section-header flex flex-col justify-center items-center gap-4 p-4 md:text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Learn...it</h1>
          <p className="inflate text-lg md:text-xl md:w-3/4 lg:w-1/2">
            At Learn...it, our mission is to empower learners worldwide by providing accessible, engaging, and high-quality educational content. We believe that education is the key to unlocking human potential and driving positive change in the world.
          </p>
          <p className="inflate text-lg md:text-xl md:w-3/4 lg:w-1/2">
            Quality is at the heart of everything we do. We work with leading educators, subject matter experts, and industry professionals to develop and curate content that meets the highest standards of excellence.
          </p>
        </div>
      </section>

      <div className="region two-column py-5 bg-white">
        <div className="column-block-wrapper flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-16">
          <div className="column-block">
            <section className="celebrity-v2">
              <div className="image-wrapper flex justify-center">
                <img
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md"
                  src="https://assets.techsmith.com/Images/content/ua-tutorials-snagit-2018/About-Us.png"
                  alt="Illustration with woman looking around"
                />
              </div>
            </section>
          </div>
          <div className="column-block flex-1">
            <section className="celebrity-v2">
              <div className="inner-wrapper">
                <div className="copy-wrapper">
                  <h2 className="text-xl md:text-2xl font-bold">Our Students-First Approach</h2>
                  <p className="mt-4 text-lg md:text-xl">
                    Our products are easy to use by people who are not content creation experts. We know creating digital content to teach, train, and explain concepts can be time-consuming. And learning new software can be intimidating.
                  </p>
                  <p className="mt-4 text-lg md:text-xl">
                    That is why we are focused on creating easy-to-use software, along with providing expert training resources and unmatched support to our customers.
                  </p>
                  <p className="mt-4 text-lg md:text-xl">
                    Our customer-focused approach has made Learn...it the predominant choice for efficient and effective image and video creation in corporate and academic settings, especially for first-time digital content creators.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="region py-5 bg-gray-100">
        <section className="content-container text-left md:text-center px-4 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold ">What Makes Learn...it Different?</h2>
          <p className="mt-4 text-lg md:text-xl">
            We understand that every learner is unique, with their own goals, preferences, and learning styles. That's why we offer personalized learning paths tailored to individual needs.
          </p>
          <p className="mt-4 text-lg md:text-xl">
            Founded in 2020, we believe in the power of interactive learning experiences to engage and inspire learners. Our courses are designed to go beyond traditional lectures and textbooks, offering hands-on activities, multimedia content, and real-world applications that bring concepts to life.
          </p>
        </section>

        <div className="section section--narrow section-blends section-full py-5 md:py-10">
          <div className="multiple-images-with-text">
            <div className="multiple-images-with-text__content-with-nav">
              <div className="multiple-images-with-text__content-list">
                <div className="prose is-selected p-4 md:p-10 text-left md:text-center ">
                  <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                  <p className="mt-4 text-lg md:text-xl ">
                    Join a vibrant community of learners from around the world who share your passion for knowledge and growth. Connect with fellow learners, share insights and experiences, and collaborate on projects to enhance your learning experience. At Learn...it, learning doesn't end with the course – it's a lifelong journey of discovery and growth.
                  </p>
                  <p className="mt-4 text-lg md:text-xl lowercase">
                    Our vision is to revolutionize education through cutting-edge technology, fostering a dynamic and inclusive learning ecosystem. We aspire to be the premier education technology platform that seamlessly integrates innovative tools, personalized learning experiences, and global connectivity. By leveraging the power of AI, data analytics, and immersive content, we aim to inspire curiosity, cultivate critical thinking, and unlock the full potential of every learner.
                  </p>
                  <p className="mt-4 text-lg md:text-xl">
                    Our commitment is to bridge educational gaps, democratize access to quality education, and prepare individuals for success in an ever-evolving world. Together, we envision a future where education transcends boundaries, creating a transformative impact on individuals, communities, and the world at large.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

