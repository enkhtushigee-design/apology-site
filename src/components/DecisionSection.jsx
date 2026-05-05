import React, { useState, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from '../hooks/useWindowSize'

export default function DecisionSection() {
  const [decision, setDecision] = useState(null) // 'forgiven' | 'waiting'
  const [showConfetti, setShowConfetti] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { width, height } = useWindowSize()

  const handleForgiven = useCallback(() => {
    setDecision('forgiven')
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }, [])

  const handleWaiting = useCallback(() => {
    setDecision('waiting')
  }, [])

  return (
    <section ref={ref} className="relative z-10 py-32 px-6">
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={220}
          colors={['#f4c2c2', '#e8a87c', '#c9748e', '#fde8d8', '#f9d5e5', '#fff']}
          gravity={0.18}
          tweenDuration={4000}
        />
      )}

      <div className="max-w-2xl mx-auto text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="block text-xs font-body font-medium tracking-[0.35em] uppercase mb-6"
          style={{ color: '#c9748e' }}
        >
          чиний шийдвэр
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="font-display font-light mb-14"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
            color: '#2d1f1f',
            lineHeight: '1.25',
          }}
        >
          Одоо чиний гар дээр байна.
        </motion.h2>

        <AnimatePresence mode="wait">
          {!decision ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Forgive button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleForgiven}
                className="relative font-body font-medium px-10 py-4 rounded-full transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #c9748e, #e8a87c)',
                  color: 'white',
                  fontSize: '1.05rem',
                  letterSpacing: '0.03em',
                  boxShadow: '0 8px 30px rgba(201,116,142,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  minWidth: '200px',
                }}
              >
                Уучлах уу? 💛
              </motion.button>

              {/* Wait button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWaiting}
                className="font-body font-light px-10 py-4 rounded-full transition-all duration-300"
                style={{
                  background: 'transparent',
                  color: '#8b6a6a',
                  fontSize: '1.05rem',
                  letterSpacing: '0.03em',
                  border: '1.5px solid rgba(201,116,142,0.3)',
                  cursor: 'pointer',
                  minWidth: '200px',
                }}
              >
                Бага зэрэг бодъё 😔
              </motion.button>
            </motion.div>
          ) : decision === 'forgiven' ? (
            <motion.div
              key="forgiven"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.3, 1] }}
                transition={{ duration: 0.6, times: [0, 0.6, 1] }}
                className="text-5xl mb-6 block"
              >
                🥺
              </motion.div>
              <h3
                className="font-display font-light mb-4"
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                  color: '#c9748e',
                }}
              >
                Баярлалаа…
              </h3>
              <p
                className="font-body font-light"
                style={{ color: '#8b6a6a', fontSize: '1.1rem' }}
              >
                Чи надад маш чухал 🥺
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="waiting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center py-8"
            >
              <div className="text-4xl mb-6">🤍</div>
              <h3
                className="font-display font-light mb-4"
                style={{
                  fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                  color: '#2d1f1f',
                }}
              >
                Би хүлээж чадна.
              </h3>
              <p
                className="font-body font-light"
                style={{ color: '#8b6a6a', fontSize: '1.05rem' }}
              >
                Чи надад чухал хэвээрээ.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
