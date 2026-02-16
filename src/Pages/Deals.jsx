
import React from 'react'

function Deals() {

  const dealsData = [1,2,3,4,5];

  return (
    <>
      {/* Container Left aligned */}
      <div className="flex flex-wrap gap-6 mt-20 ml-10">

        {dealsData.map((item, index) => (

          <div key={index}
          className="bg-white w-[420px] rounded-2xl shadow-lg border border-gray-100 p-5 
          hover:shadow-xl transition duration-300 flex items-center justify-between">

            {/* Text */}
            <div>

              <h1 className="text-xl font-bold text-gray-800">
                Dental Clinic
              </h1>

              <p className="text-gray-500 mt-1 font-medium">
                Wed May 20 • 08:00 – 08:30 AM
              </p>

              <h2 className="text-2xl font-bold text-[#2E8B57] mt-2">
                $50.00
              </h2>

              <div className="flex gap-3 mt-4">

                <button className="px-4 py-1.5 rounded-xl border border-gray-300 font-medium text-gray-700 
                hover:bg-[#2E8B57] hover:text-white hover:border-[#2E8B57] transition duration-300">
                  Update
                </button>

                <button className="px-4 py-1.5 rounded-xl border border-red-300 font-medium text-red-500 
                hover:bg-[#2E8B57] hover:text-white hover:border-[#2E8B57] transition duration-300">
                  Disable
                </button>

              </div>

            </div>

            {/* Rounded Big Image */}
            <div className="overflow-hidden ml-4">
              <img
                src="/main.svg"
                alt="Dental Clinic"
                className="w-28 h-28 rounded-full object-cover hover:scale-110 transition duration-500 cursor-pointer border-2 border-gray-200"
              />
            </div>

          </div>

        ))}

      </div>
    </>
  )
}

export default Deals
