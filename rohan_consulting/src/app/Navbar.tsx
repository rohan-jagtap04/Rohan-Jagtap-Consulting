'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or brand name */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          MyShop
        </Link>

        {/* Hamburger Menu (mobile) */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-indigo-600">
            Products
          </Link>
          <Link href="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-4 py-2 flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-indigo-600 border-b"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-indigo-600 border-b"
            >
              Products
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-indigo-600 border-b"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}