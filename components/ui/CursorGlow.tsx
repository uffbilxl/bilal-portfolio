'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    const cursor = cursorRef.current
    const glow = glowRef.current
    if (!cursor || !glow) return

    let mouseX = 0, mouseY = 0
    let glowX = 0, glowY = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }

    const animate = () => {
      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.width = '20px'
      cursor.style.height = '20px'
      cursor.style.boxShadow = '0 0 12px #00f5ff, 0 0 30px #00f5ff'
    }

    const onLeave = () => {
      cursor.style.width = '12px'
      cursor.style.height = '12px'
      cursor.style.boxShadow = '0 0 6px #00f5ff'
    }

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    animId = requestAnimationFrame(animate)
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        aria-hidden="true"
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: 'rgba(0,245,255,0.9)',
          boxShadow: '0 0 6px #00f5ff',
          transition: 'width 0.15s, height 0.15s, box-shadow 0.15s',
          willChange: 'transform',
        }}
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        aria-hidden="true"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, rgba(0,245,255,0.03) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
