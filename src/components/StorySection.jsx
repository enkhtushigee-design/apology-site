import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    text: 'Би тэр үед зүгээр л тоглоом гэж бодсон...',
    sub: 'Хэр буруу байсныгаа ойлгоогүй.',
  },
  {
    number: '02',
    text: 'Гэхдээ чамд ямар санагдсаныг ойлгоогүй.',
    sub: 'Чиний мэдрэмжийг үл тооцсон.',
  },
  {
    number: '03',
    text: 'Одоо би үнэхээр ойлгож байна.',
    sub: 'Хугацаа өнгөрсний дараа л.',
  },
  {
    number: '04',
    text: 'Чамайг гомдоосондоо би харамсаж байна.',
    sub: 'Энэ бол миний үнэн сэтгэл.',
  },
]

function StoryStep({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      className="flex items-start gap-6 md:gap-10 group"
    >
      {/* Number */}
      <div className="flex-shrink-0 pt-1">
        <span
          className="font-display font-light"
          style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            color: 'rgba(201,116,142,0.15)',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 pb-14 border-b border-rose-100 last:border-0">
        <h3
          className="font-display font-light mb-3 leading-snug"
          style={{
            fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
            color: '#2d1f1f',
          }}
        >
          {step.text}
        </h3>
        <p
          className="font-body font-light"
          style={{ color: '#a07878', fontSize: '1rem' }}
        >
          {step.sub}
        </p>
      </div>
    </motion.div>
  )
}

export default function StorySection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="story" className="relative z-10 py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20 text-center"
        >
          <span
            className="text-xs font-body font-medium tracking-[0.35em] uppercase block mb-4"
            style={{ color: '#c9748e' }}
          >
            юу болсон бэ
          </span>
          <h2
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#2d1f1f' }}
          >
            Миний дотоод дуу хоолой
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <StoryStep key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
