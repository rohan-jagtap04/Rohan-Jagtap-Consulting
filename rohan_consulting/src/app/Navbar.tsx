'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Animate the entire nav container
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow"
    >
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
          <AnimatedNavLink href="/">Home</AnimatedNavLink>
          <AnimatedNavLink href="/products">Products</AnimatedNavLink>
          <AnimatedNavLink href="/contact">Contact</AnimatedNavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-50 border-t overflow-hidden"
        >
          <div className="px-4 py-2 flex flex-col space-y-2">
            <AnimatedNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </AnimatedNavLink>
            <AnimatedNavLink href="/products" onClick={() => setIsOpen(false)}>
              Products
            </AnimatedNavLink>
            <AnimatedNavLink href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </AnimatedNavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

/** 
 * A reusable component for animating nav links 
 */
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
    <motion.div
      whileHover={{ scale: 1.05, color: '#4F46E5' }} // slightly enlarge & color the link on hover
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="hover:text-indigo-600 transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  )
}