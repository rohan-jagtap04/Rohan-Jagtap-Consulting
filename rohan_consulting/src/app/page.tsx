'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* 1. PARALLAX HERO SECTION */}
      <section
        className="
          relative h-screen w-full 
          bg-cover bg-center bg-fixed
          flex items-center justify-center
          text-white
        "
        // Replace the URL below with your own image.
        style={{
          backgroundImage: "url('/images/parallax-bg.jpg')",
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Parallax Hero
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto drop-shadow">
            Experience a stunning parallax effect as you scroll.
          </p>
        </motion.div>
      </section>

      {/* 2. BACKGROUND VIDEO WITH TEXT OVERLAY (SCROLLYTELLING) */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background video filling the entire section */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          // Replace the URL below with your own video.
          src="/videos/background-video.mp4"
        />

        {/* A semi-transparent overlay if desired */}
        <div className="absolute inset-0 bg-purple-900/20" />

        {/* Foreground content */}
        <div
          className="
            relative z-10 
            flex flex-col items-center justify-center 
            h-full text-center text-white px-4
          "
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Scroll Over Our Epic Video
          </motion.h2>
          <motion.p
            className="max-w-lg text-xl drop-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            This text floats over a background video, creating a scrollytelling
            effect.
          </motion.p>
        </div>
      </section>

      {/* 3. HORIZONTALLY SCROLLED SECTION */}
      <section className="py-16">
        <motion.h3
          className="text-3xl md:text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Horizontal Scroll Gallery
        </motion.h3>

        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 min-w-max px-4">
            {/* Sample items to demonstrate horizontal scrolling */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="
                  w-64 h-64 
                  flex-shrink-0 
                  bg-gradient-to-r from-purple-500 to-pink-500 
                  flex items-center justify-center 
                  text-white text-2xl 
                  font-bold 
                  rounded-lg 
                  shadow-lg
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                Item {i + 1}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ANIMATED TEXT SECTION */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <motion.h4
          className="text-4xl font-extrabold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Scrollytelling Animated Text
        </motion.h4>

        <motion.p
          className="max-w-xl mx-auto mt-6 text-center text-lg text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          This text fades in when it comes into the viewport, adding an engaging
          storytelling aspect to your site.
        </motion.p>
      </section>

      {/*  (Optional) Additional sections below */}
    </div>
  )
}