import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative z-10 py-32 px-6 text-center"
      style={{
        borderTop: '1px solid rgba(201,116,142,0.12)',
      }}
    >
      <div className="max-w-xl mx-auto">
        {/* Divider ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,116,142,0.3))' }}
          />
          <span style={{ color: '#e8b4b8', fontSize: '1.1rem' }}>✦</span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to left, transparent, rgba(201,116,142,0.3))' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="font-display font-light italic mb-6"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
            color: '#8b6a6a',
            lineHeight: '1.6',
          }}
        >
          "Чи ямар шийдвэр гаргасан ч би ойлгоно."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
          className="font-body font-light"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#a07878',
            lineHeight: '1.7',
          }}
        >
          Гэхдээ чамайг би үнэхээр үнэлдэг.
        </motion.p>

        {/* Bottom heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'backOut', delay: 0.8 }}
          className="mt-14 text-2xl"
          style={{ color: '#e8b4b8' }}
        >
          🤍
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 font-body font-light"
          style={{
            fontSize: '0.72rem',
            color: 'rgba(140,100,100,0.4)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          чамд зориулж, зүрхнээсээ
        </motion.p>
      </div>
    </section>
  )
}
