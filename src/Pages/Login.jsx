
import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Username:", username)
    console.log("Password:", password)

    // yahan API call bhi kar sakti ho
  }

  return (
    <div className="relative h-screen w-full">

      {/* ===== Background Image ===== */}
      <img
        src="/main.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ===== Login Card ===== */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form 
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
        >

          <h1 className="text-2xl font-bold text-center text-gray-900">
            Login
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Welcome back! Please login to your account
          </p>

          {/* Username */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                transition"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full h-12 px-4 border rounded-xl
                focus:outline-none focus:border-[#2ED3C5]
                focus:ring-2 focus:ring-[#2ED3C5]/40
                transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 h-12 bg-[#2ED3C5] text-white font-semibold rounded-xl
              hover:bg-[#26b8ab] transition"
          >
            Login
          </button>

          {/* Extra */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?
            <span className="text-[#2ED3C5] cursor-pointer ml-1 font-medium">
              Sign Up
            </span>
          </p>

        </form>
      </div>

    </div>
  )
}

export default Login
