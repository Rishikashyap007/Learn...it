import React from "react";
import "./JobPortal.css";
import picone from "./images/picone.png";
import Pictwo from "./images/Pictwo.png";
const JobPortal = () => {
  return (
    <>
      <div className="container-main border-2 py-4 m-1">
        <div className="div-one">
          <header>
            <h1>Apply Your Enhanced Skills To Land A Dream Job With iNeuron</h1>
            <p>
              Let your skills represent you, While we open your Doors to
              Exclusive Jobs from our top Recruiters.
            </p>
            <section class="categories-container">
              <ul class="categories-list">
                <li class="category-item">
                  <a href="./"># Operations</a>
                </li>
                <li class="category-item">
                  <a href="./"># Data Engineering</a>
                </li>
                <li class="category-item">
                  <a href="./"># Big Data</a>
                </li>
                <li class="category-item">
                  <a href="./"># HR</a>
                </li>
                <li class="category-item">
                  <a href="./"># Design & Media</a>
                </li>
                <li class="category-item">
                  <a href="./"># Counselling</a>
                </li>
                <li class="category-item">
                  <a href="./"># Training And Placement</a>
                </li>
                <li class="category-item">
                  <a href="./"># Product</a>
                </li>
              </ul>
            </section>
            <div class="job-search-container">
              <div class="job-search-box">
                <input
                  type="text"
                  placeholder="&#x1F50D;Search Companies / Designation"
                ></input>
                <input type="text" placeholder="Location"></input>
                <button>Explore</button>
              </div>
            </div>
          </header>
        </div>
        <div className="div-one-1">
          <img src={picone} alt="picone" width="600" height="460" />{" "}
        </div>
      </div>
      <div className="container-trending border-2 py-4 m-1">
        <h1>Trending Jobs</h1>
        <div className="jobCard">
          <div className="card">
            <h2>Software Developer</h2>
            <p>CTC:- Not Discloses</p>
            <p>Exp:- 2-4 Years</p>
            <p>Loc:- Bangalore/Bengaluru</p>
            <div className="button-container">
              <button className="view-button">View Jobs</button>
              <button className="share-button">Share Jobs</button>
            </div>
          </div>
          <div className="card">
            <h2>Software Developer</h2>
            <p>CTC:- Not Discloses</p>
            <p>Exp:- 2-4 Years</p>
            <p>Loc:- Bangalore/Bengaluru</p>
            <div className="button-container">
              <button className="view-button">View Jobs</button>
              <button className="save-button">Share Jobs</button>
            </div>
          </div>
          <div className="card">
            <h2>Software Developer</h2>
            <p>CTC:- Not Discloses</p>
            <p>Exp:- 2-4 Years</p>
            <p>Loc:- Bangalore/Bengaluru</p>
            <div className="button-container">
              <button className="view-button">View Jobs</button>
              <button className="save-button">Share Jobs</button>
            </div>
          </div>
        </div>
        <div className="pictwo">
          <img src={Pictwo} alt="picone" width="1150px" />{" "}
        </div>
      </div>
    </>
  );
};
export default JobPortal;
