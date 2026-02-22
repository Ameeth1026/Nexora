import React, { useEffect, useRef } from 'react'
import './Nexora.css'

export const Nexora = () => {
  const xRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      const progress = Math.min(scrollY / vh, 1)

      const scale = 1 + progress * 20

      if (xRef.current) {
        xRef.current.style.transform = `scale(${scale})`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <section className="hero">
        <h1 className="logo">
          Ne
          <span className="x-letter" ref={xRef}>x</span>
          ora
        </h1>
      </section>

    </>
  )
}