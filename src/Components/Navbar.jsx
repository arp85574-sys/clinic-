
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="h-20 mt-4 bg-[#2ED3C5] flex items-center justify-between px-10 shadow-md">

      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/img.svg"
            alt="logo"
            className="h-12 cursor-pointer"
          />
        </Link>
      </div>

      {/* Menu */}
      <ul className="flex gap-10 text-white font-semibold text-lg">

        <li>
          <Link
            to="/"
            className="cursor-pointer hover:text-black transition duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="cursor-pointer hover:text-black transition duration-300"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="cursor-pointer hover:text-black transition duration-300"
          >
            Login
          </Link>
        </li>


        <li>
          <Link
            to="/deals"
            className="cursor-pointer hover:text-black transition duration-300"
          >
            Deals
          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            className="bg-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Sign Up
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar
