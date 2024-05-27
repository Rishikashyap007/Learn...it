import React from 'react';

const CourseFees = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Course Fees</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            These only take effect once you start earning above the PAP threshold amount for your course.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This table shows how much of your monthly income you will pay, based on the different possible annual incomes you may have. For more information on the Masai School ISA, please see our FAQs.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xl font-medium text-gray-900">Your CTC based on your salary tier.</p>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Your Salary Range (CTC)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monthly Payable Amount (PAP)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tenure (in months)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Payable Fee (Including taxes if applicable)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 whitespace-nowrap">&lt; 3.5 LPA</td>
                  <td className="px-6 py-4 whitespace-nowrap">0</td>
                  <td className="px-6 py-4 whitespace-nowrap">NA</td>
                  <td className="px-6 py-4 whitespace-nowrap">0</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">A</td>
                  <td className="px-6 py-4 whitespace-nowrap">3.5 - 4.99 LPA</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹ 6,944</td>
                  <td className="px-6 py-4 whitespace-nowrap">36</td>
                  <td className="px-6 py-4 whitespace-nowrap">2,50,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">B</td>
                  <td className="px-6 py-4 whitespace-nowrap">5 - 9.99 LPA</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹ 9,722</td>
                  <td className="px-6 py-4 whitespace-nowrap">36</td>
                  <td className="px-6 py-4 whitespace-nowrap">3,50,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">C</td>
                  <td className="px-6 py-4 whitespace-nowrap">10 LPA and above</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹ 15,000</td>
                  <td className="px-6 py-4 whitespace-nowrap">30</td>
                  <td className="px-6 py-4 whitespace-nowrap">4,50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-500">
            CTC (Cost to Company) is defined as the total gross income earned, including but not limited, to variable pay, compensations and ESOPs. Find out more in the FAQ section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseFees;