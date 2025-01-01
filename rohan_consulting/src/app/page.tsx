// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-screen bg-white dark:bg-neutral-900">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* Large fade or silhouette image if you want */}
          {/* <Image ... /> */}
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.2] mb-4"
          >
            Enhancement<br />of human experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-8"
          >
            Explore cutting-edge wearable &amp; neural technologies designed for
            the intelligence age.
          </motion.p>

          <div className="flex space-x-3">
            <Link
              href="/programs"
              className="inline-block px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              A&apos;Sense
            </Link>
            <Link
              href="/programs"
              className="inline-block px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              B&apos;Eye
            </Link>
            <Link
              href="/programs"
              className="inline-block px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              A&apos;Neuro
            </Link>
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-6 w-full flex justify-center">
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400 text-sm">
            <span>Scroll</span>
            <div className="w-[1px] h-6 bg-current animate-bounce mt-1" />
          </div>
        </div>
      </section>

      {/* 2. Overview Section (light grey) */}
      <section className="relative flex flex-col justify-center min-h-screen bg-gray-50 dark:bg-neutral-800 py-16 px-6 md:px-12">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          2.0 Putting People First
        </motion.h2>
        <motion.p
          className="max-w-3xl text-gray-700 dark:text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Through the use of wearable technology, we aim to enhance human
          capabilities and generate a positive impact on the world. This section
          can replicate the “Putting People First” reference from Augen, with
          big bold headings and plenty of negative space.
        </motion.p>
        <Link href="#" className="text-blue-600 dark:text-blue-400 underline">
          Career Options
        </Link>
      </section>

      {/* 3. Stay Updated (another block, referencing 3.0) */}
      <section className="relative flex flex-col justify-center min-h-screen bg-white dark:bg-neutral-900 py-16 px-6 md:px-12">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          3.0 Stay Updated
        </motion.h2>
        <p className="max-w-3xl text-gray-700 dark:text-gray-300 mb-10">
          Stay updated with our latest technological innovations and
          advancements in research and development. 
        </p>
        <Link href="/updates" className="text-blue-600 dark:text-blue-400 underline">
          Latest News
        </Link>
      </section>

      {/* Add more sections as needed, e.g. "The new Method," "Our Aim," etc. */}
    </div>
  )
}