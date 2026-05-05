import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ImageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative z-10 py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-px h-16 mx-auto mb-12 origin-top"
          style={{ background: 'linear-gradient(to bottom, #c9748e, transparent)' }}
        />

        {/* Image frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          className="relative inline-block"
        >
          {/* Decorative border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-10"
            style={{
              boxShadow: 'inset 0 0 0 1px rgba(201,116,142,0.2)',
            }}
          />

          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201,116,142,0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{
              width: 'min(400px, 85vw)',
              height: 'min(500px, 106vw)',
              background: 'linear-gradient(135deg, #f5e6e8 0%, #fdf0e8 50%, #f5e6e8 100%)',
            }}
          >
            <img
              src="/her.jpg"
              alt="Чи надад чухал"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Fallback placeholder */}
            <div
              style={{
                display: 'none',
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
              }}
            >
              <div style={{ fontSize: '4rem', opacity: 0.4 }}>🤍</div>
              <p
                className="font-body font-light"
                style={{ color: '#c9748e', fontSize: '0.85rem', opacity: 0.7 }}
              >
                her.jpg
              </p>
            </div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.7 }}
          className="mt-10 font-display font-light italic"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
            color: '#8b6a6a',
          }}
        >
          "Чи надад үнэхээр чухал хүн."
        </motion.p>
      </div>
    </section>
  )
}
