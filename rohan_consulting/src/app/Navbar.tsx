// src/app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // We can check whether we’re in dark mode or not
  const isDark = theme === 'dark'

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow"
    >
      {/* Left: Brand Name */}
      <Link
        href="/"
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
      >
        MyShop
      </Link>

      {/* Right: Desktop Menu + Theme Toggle */}
      <div className="hidden md:flex items-center space-x-6">
        <AnimatedNavLink href="/">Home</AnimatedNavLink>
        <AnimatedNavLink href="/products">Products</AnimatedNavLink>
        <AnimatedNavLink href="/contact">Contact</AnimatedNavLink>

        {/* Theme Toggle Icon */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="text-gray-600 dark:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* Hamburger (mobile) */}
      <button
        className="md:hidden text-gray-600 dark:text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col space-y-2 px-4 py-3">
            <AnimatedNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </AnimatedNavLink>
            <AnimatedNavLink href="/products" onClick={() => setIsOpen(false)}>
              Products
            </AnimatedNavLink>
            <AnimatedNavLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </AnimatedNavLink>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                setTheme(isDark ? 'light' : 'dark')
                setIsOpen(false)
              }}
              className="flex items-center text-gray-600 dark:text-gray-300 p-2 space-x-2 transition-colors"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              <span>Toggle Theme</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function AnimatedNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </motion.div>
  )
}