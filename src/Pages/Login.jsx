
import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({                           
          username: username,
          password: password
        }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log("Login success:", data)

        // token save karna ho to
        localStorage.setItem("token", data.token)

        alert("Login successful ✅")

        // redirect example
        // window.location.href = "/dashboard"
      } else {
        setError(data.message || "Login failed")
      }

    } catch (err) {
      console.error(err)
      setError("Invalid username or password")
    }

    setLoading(false)
  }

  return (
    <div className="relative h-screen w-full">

      <img
        src="/main.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
        >

          <h1 className="text-2xl font-bold text-center text-gray-900">
            Login
          </h1>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {error}
            </p>
          )}

          {/* Username */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-12 px-4 border rounded-xl"
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
              className="w-full h-12 px-4 border rounded-xl"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 h-12 bg-[#2ED3C5] text-white font-semibold rounded-xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  )
}

export default Login
