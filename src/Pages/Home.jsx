
import React from 'react'

function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="w-full flex items-center justify-between px-16 pt-28">
        {/* ↑ pt-28 navbar ke liye safe space */}

        {/* Left Content */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Consult a <span className="text-[#2ED3C5]">Dental</span> <br />
            Anytime, Anywhere
          </h1>

          <p className="text-gray-600 text-lg max-w-lg">
            Professional dental consultation with experienced doctors.
          </p>

          <p className="text-gray-700 text-lg max-w-2xl leading-relaxed">
          Find new patients and get your old customers to visit you more often.
          Post deals and last-minute appointments in an easy way.
        </p>
        </div>

        {/* Right Image */}
        <div className="w-1/2 -mt-25
         flex justify-end">
          <img
            src="/main-bg1 1.svg"
            alt="Dental"
            className="
              w-[580px] 
              max-w-full 
              object-contain
            "
          />
        </div>
      </div>

      {/* ================= SECOND section ================= */}
     
     <div>
      <button className='ml-15 -mt-20 rounded-2xl h-10 text-white font-bold w-30 bg-[#2ED3C5]  '>
        GET STARTED
      </button>
     </div>
    </>
  )
}

export default Home




