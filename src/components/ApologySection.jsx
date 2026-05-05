import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ApologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const lines = [
    { text: 'Уучлаарай.', delay: 0, size: 'clamp(3rem, 9vw, 7rem)', weight: '300' },
    {
      text: 'Би чамайг гомдоосондоо үнэхээр харамсаж байна.',
      delay: 0.35,
      size: 'clamp(1.1rem, 2.8vw, 1.8rem)',
      weight: '300',
      italic: true,
    },
    {
      text: 'Дахиж тийм зүйл хийхгүй.',
      delay: 0.65,
      size: 'clamp(1.1rem, 2.8vw, 1.8rem)',
      weight: '400',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative z-10 py-40 px-6 text-center"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(233,160,175,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Tiny label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="block text-xs font-body font-medium tracking-[0.35em] uppercase mb-12"
          style={{ color: '#c9748e' }}
        >
          миний гэмшил
        </motion.span>

        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: line.delay + 0.2 }}
          >
            <p
              className="font-display leading-tight mb-6"
              style={{
                fontSize: line.size,
                fontWeight: line.weight,
                color: i === 0 ? '#c9748e' : '#2d1f1f',
                fontStyle: line.italic ? 'italic' : 'normal',
                lineHeight: i === 0 ? '1' : '1.4',
              }}
            >
              {line.text}
            </p>
          </motion.div>
        ))}

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex justify-center gap-2 mt-10"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full animate-pulse-soft"
              style={{
                width: i === 1 ? '8px' : '5px',
                height: i === 1 ? '8px' : '5px',
                background: '#e8b4b8',
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
