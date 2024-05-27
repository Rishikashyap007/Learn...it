import React from 'react';

const DropOutClauses = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Drop Out Clauses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            If you realise that Masai is not for you, you may withdraw from our courses at anytime. Here is how the fee works in case you drop-out
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center">
              <div className="bg-black text-white px-4 py-2">Week 1-5</div>
              <div className="bg-red-500 text-white px-4 py-2">No Payment</div>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-white px-4 py-2">Week 6-20</div>
              <div className="bg-red-500 text-white px-4 py-2">₹50,000</div>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-white px-4 py-2">Week 21-30/35</div>
              <div className="bg-red-500 text-white px-4 py-2">100% PAP Amount</div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-500">
            These drop-out clauses also applicable if you breach the Masai Student Code of Conduct.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropOutClauses;