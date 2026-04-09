
import React, { useState } from "react";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("https://dummyjson.com/auth/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          
        }),
      });

      const data = await res.json();
      console.log(data);

      alert("Signup Successful ✅");

      // clear fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <img
        src="/main.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white w-[400px] p-8 rounded-2xl shadow-2xl">
        
        <h2 className="text-3xl font-bold text-center text-[#2ED3C5] mb-6">
          Create Account
        </h2>

        {/* IMPORTANT: onSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          < inputl
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <input
            type="password"
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ED3C5]"
          />

          <button
            type="submit"
            className="bg-[#2ED3C5] text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}

export default Signup;