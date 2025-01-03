// app/about/page.tsx
'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-neutral-800 px-6 md:px-12 pb-16 pt-[200px] text-gray-800 dark:text-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        Our Mission &amp; Vision
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl mb-6"
      >
        At Augen, we put humans first. Our mission is to make humans better—a lot
        better. Leading the future of Invisible Computing, simplifying Heads-Up
        Computing, and bridging the gap between technology and the human
        experience.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-3xl mb-6"
      >
        We are currently in the research &amp; development phase of two
        innovative devices that will enhance everyday life, ensuring our
        approach remains invisible yet transformative.
      </motion.p>
    </section>
  )
}