import React from 'react'

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orb 1 — warm rose */}
      <div
        className="absolute animate-float-slow"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,160,175,0.35) 0%, transparent 70%)',
          top: '-150px',
          left: '-100px',
          animationDelay: '0s',
        }}
      />
      {/* Orb 2 — peach */}
      <div
        className="absolute animate-float-medium"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(241,193,145,0.3) 0%, transparent 70%)',
          bottom: '10%',
          right: '-80px',
          animationDelay: '-3s',
        }}
      />
      {/* Orb 3 — blush */}
      <div
        className="absolute animate-float-fast"
        style={{
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214,160,190,0.25) 0%, transparent 70%)',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          animationDelay: '-5s',
        }}
      />
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
    </div>
  )
}
