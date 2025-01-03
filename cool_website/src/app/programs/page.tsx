// app/programs/page.tsx
'use client'

import { motion } from 'framer-motion'

export default function ProgramsPage() {
  return (
    
    <section className="min-h-screen bg-neutral-900 text-gray-100 px-6 md:px-12 pt-[200px] pb-16">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="relative w-full h-full">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute right-0 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-3xl"
            animate={{
              x: [0, -120, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        The new Method
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl mb-6"
      >
        Where the future is wearable. We blend innovation and insight to
        transform bold visions into reality, redefining the future of human
        enhancement with cutting-edge wearable technologies such as A&rsquo;Sense,
        B&rsquo;Eye, and A&rsquo;Neuro.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        href="/updates"
        className="inline-block text-blue-400 underline"
      >
        Go to Updates
      </motion.a>
    </section>
  )
}