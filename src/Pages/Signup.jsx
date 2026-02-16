
import React from "react";

function Signup() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/main.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Signup Card */}
      <div className="relative bg-white w-[400px] p-8 rounded-2xl shadow-2xl">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#2ED3C5] mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <button
            type="submit"
            className="bg-[#2ED3C5] text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-[#2ED3C5] font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
