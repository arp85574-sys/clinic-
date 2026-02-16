
import React from 'react'

function About() {
  return (
    <div className="w-full px-10 pt-16">

      {/* ===== Heading ===== */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Clinic Settings
        </h1>
        <p className="text-gray-500 mt-2">
          Update your photo and personal details here
        </p>
      </div>

      {/* ===== Form Card ===== */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        {/* ===== GRID START ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Clinic Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Clinic Name
            </label>
            <input
              type="text"
              placeholder="Clinic name"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                hover:border-[#2ED3C5] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="clinic@email.com"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                hover:border-[#2ED3C5] transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                hover:border-[#2ED3C5] transition"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="Postal code"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                hover:border-[#2ED3C5] transition"
            />
          </div>

          {/* Address (Full Width) */}
          <div className="md:col-span-2">
            <label className="block  text-gray-700 font-bold mb-2">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Clinic full address"
              className="w-full px-4 py-3 border rounded-xl resize-none
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                hover:border-[#2ED3C5] transition"
            ></textarea>
          </div>

          {/* Password (Full Width) */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-2 ">
              Password
            </label>
            <input
              type="password"
              placeholder="************"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                hover:border-[#2ED3C5] transition"
            />
          </div>

        </div>
        {/* ===== GRID END ===== */}

        {/* Save Button */}
        <button
          className="w-full mt-8 h-12 bg-[#2ED3C5] text-white font-semibold
            rounded-xl hover:bg-[#26b8ab] transition"
        >
          Save Changes
        </button>

      </div>




    </div>
  )
}

export default About
