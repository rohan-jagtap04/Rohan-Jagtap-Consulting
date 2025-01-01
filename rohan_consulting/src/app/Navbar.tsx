// app/components/Navbar.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          bg-white dark:bg-neutral-900 
          bg-opacity-70 dark:bg-opacity-70 
          backdrop-blur-lg 
          shadow-sm rounded-full 
          flex items-center justify-between 
          w-[95%] max-w-5xl px-6 py-3
        "
      >
        {/* Left Brand */}
        <Link href="/" className="font-semibold text-lg tracking-wide">
          augen
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <li>
            <Link href="/programs" className="hover:text-gray-600 dark:hover:text-gray-300">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/updates" className="hover:text-gray-600 dark:hover:text-gray-300">
              Updates
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="
              absolute top-full left-0 w-full 
              mt-2
            "
          >
            <div
              className="
                mx-auto w-[95%] max-w-5xl 
                bg-white dark:bg-neutral-900 
                rounded-xl shadow-lg 
                flex flex-col space-y-2
                py-4 px-6
              "
            >
              <Link
                href="/programs"
                className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => setOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/updates"
                className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => setOpen(false)}
              >
                Updates
              </Link>
              <Link
                href="/about"
                className="py-2 hover:text-gray-600 dark:hover:text-gray-300"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}