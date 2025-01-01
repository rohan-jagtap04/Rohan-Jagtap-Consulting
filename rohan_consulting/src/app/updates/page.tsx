// app/updates/page.tsx
'use client'

import { motion } from 'framer-motion'

export default function UpdatesPage() {
  return (
    <section className="min-h-screen bg-neutral-900 text-gray-100 px-6 md:px-12 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        Stay Updated
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl mb-10"
      >
        Stay updated with our latest technological innovations. A place to share
        news, articles, or R&D breakthroughs, similarly to how augen.pro has
        extended updates or programs.
      </motion.p>

      {/* Example list of updates */}
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: num * 0.2 }}
            className="bg-neutral-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Update {num}</h3>
            <p className="text-gray-400">
              Some short overview of what changed or is in progress. 
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}