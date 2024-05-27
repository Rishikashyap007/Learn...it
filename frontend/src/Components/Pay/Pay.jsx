
import React from "react";
import Works from "./works";
import CourseFees from "./CoursesFee";
import DropOutClauses from "./Dropout";

function Pay() {
  return (
    <>
      <div className="pay-container min-h-screen flex flex-col gap-4 py-4">
        <div className="pay-heading flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl lg:text-4xl text-center font-semibold">
            Pay After Placement
          </h1>
          <p className="text-lg lg:text-xl text-center font-light max-w-2xl">
            We believe that potential is evenly distributed across Indian
            society, but opportunity is not. TEN is democratizing education
            with a unique Pay After Placement (PAP) Model. PAP allows you to
            study the course of your choice at ₹0 upfront fee.
          </p>
        </div>
        <div className="pay-section flex flex-col lg:flex-row justify-center items-center py-4 border-2 px-4 md:h-40 bg-red-200">
          <h1 className="text-lg lg:text-3xl font-bold mb-4 lg:mb-0 lg:w-1/3">
            Pay After Placement (PAP) Agreement
          </h1>
          <p className="text-sm lg:text-lg font-normal lg:w-2/3">
            PAP Agreement is a legal contract that makes education at TEN. It is not an education loan, as you do not have to
            pay any interest & you do not require any collaterals. 
          </p>
        </div>
        <Works />
        {/* <CourseFees />
        <DropOutClauses /> */}
      </div>
    </>
  );
}

export default Pay;

