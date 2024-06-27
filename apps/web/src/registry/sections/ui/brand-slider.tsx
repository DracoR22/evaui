'use client'

import React, { useState } from 'react'

const BrandSlider = ({ logos }: { logos: string[] }) => {
  const [copyLogos, setCopyLogos] = useState<string[]>(logos)

  const styles = {
    beforeAfterCommon: {
      position: 'absolute' as 'absolute',
      top: 0,
      width: '250px',
      height: '100%',
      content: '""',
      zIndex: 2,
    },
    before: {
      left: 0,
      background: 'linear-gradient(to left, rgba(255, 255, 255, 0), black)',
    },
    after: {
      right: 0,
      background: 'linear-gradient(to right, rgba(255, 255, 255, 0), black)',
    },
    keyframes: `
      @keyframes slide {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
    `,
    logosSlide: {
      display: 'inline-flex',
      animation: '35s slide infinite linear',
    },
  }

  return (
    <div className="relative overflow-hidden py-15 bg-background">
      <style>{styles.keyframes}</style>
      <div className="logos-slide flex items-center" style={styles.logosSlide}>
        {copyLogos.map((logo, index) => (
          <img key={index} src={logo} alt="" className="h-8 mx-10" />
        ))}
        {copyLogos.map((logo, index) => (
          <img key={index} src={logo} alt="" className="h-8 mx-10" />
        ))}
      </div>
      <div style={{ ...styles.beforeAfterCommon, ...styles.before }}></div>
      <div style={{ ...styles.beforeAfterCommon, ...styles.after }}></div>
    </div>
  )
}

export { BrandSlider }
