
import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

function Navbar() {

  // demo cart count
  const cartCount = 2

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
      <ul className="flex items-center gap-10 text-white font-semibold text-lg">

        <li>
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-black transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/deals" className="hover:text-black transition">
            Deals
          </Link>
        </li>

        <li>
          <Link to="/login" className="hover:text-black transition">
            Login
          </Link>
        </li>

        {/* Cart */}
        <li>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 hover:text-black transition"
          >
            <ShoppingCart size={26} />

            {/* Badge */}
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>

            Cart
          </Link>
        </li>

        {/* Signup */}
        <li>
          <Link
            to="/signup"
            className="bg-black px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>
        </li>

      </ul>

   <h1>



  
</h1>
    </nav>
  )
}

export default Navbar