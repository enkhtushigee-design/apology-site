import React from 'react'
import FloatingBackground from './components/FloatingBackground'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import ImageSection from './components/ImageSection'
import ApologySection from './components/ApologySection'
import DecisionSection from './components/DecisionSection'
import FinalSection from './components/FinalSection'

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: '#fdf8f5' }}
    >
      {/* Ambient animated background */}
      <FloatingBackground />

      {/* Page content */}
      <main className="relative">
        <HeroSection />
        <StorySection />
        <ImageSection />
        <ApologySection />
        <DecisionSection />
        <FinalSection />
      </main>
    </div>
  )
}
