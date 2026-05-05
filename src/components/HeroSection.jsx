import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 z-10">
      {/* Decorative top line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-16 origin-top"
        style={{ background: 'linear-gradient(to bottom, transparent, #c9748e)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        className="mb-6"
      >
        <span
          className="text-xs font-body font-medium tracking-[0.35em] uppercase"
          style={{ color: '#c9748e', letterSpacing: '0.35em' }}
        >
          чамд зориулж
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.9 }}
        className="font-display font-light leading-tight mb-6"
        style={{
          fontSize: 'clamp(2.2rem, 6vw, 5rem)',
          color: '#2d1f1f',
          maxWidth: '800px',
          lineHeight: '1.2',
        }}
      >
        Надад чамд хэлэх
        <br />
        <em className="text-gradient not-italic">нэг зүйл байна...</em>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1.3 }}
        className="font-body font-light mb-14 text-xl md:text-2xl"
        style={{ color: '#8b6a6a', maxWidth: '500px' }}
      >
        Би алдаа гаргасан.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 1.7 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={scrollToStory}
        className="group relative font-body font-medium px-10 py-4 rounded-full transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #c9748e, #e8a87c)',
          color: 'white',
          fontSize: '1rem',
          letterSpacing: '0.05em',
          boxShadow: '0 8px 30px rgba(201,116,142,0.35)',
        }}
      >
        <span className="relative z-10">Сонсох уу?</span>
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, #b8637d, #d9976b)' }}
        />
      </motion.button>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#d4a0a8', fontSize: '1.2rem' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
