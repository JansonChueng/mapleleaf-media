import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  life: number
  maxLife: number
}

export default function MapleLeaf() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const scrollYRef = useRef(0)
  const prefersReducedMotion = useRef(false)
  const isPausedRef = useRef(false)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion.current) { setIsActive(false); return }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0

    const resize = () => { w = window.innerWidth; h = window.innerHeight; canvas.width = w; canvas.height = h }
    resize()
    window.addEventListener('resize', resize)

    const onScroll = () => { scrollYRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onVisibilityChange = () => { isPausedRef.current = document.hidden }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const spawnParticles = () => {
      const count = window.innerWidth < 768 ? 8 : 15
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * w, y: Math.random() * h * 0.5 - 50,
          vx: (Math.random() - 0.5) * 0.3, vy: 0.3 + Math.random() * 0.7,
          size: 4 + Math.random() * 8, rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02, opacity: 0.1 + Math.random() * 0.3,
          life: 0, maxLife: 300 + Math.random() * 600,
        })
      }
    }
    spawnParticles()

    const drawMapleLeaf = (cx: number, cy: number, size: number, rotation: number, opacity: number, color: string) => {
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity
      ctx.fillStyle = color
      ctx.beginPath()
      const s = size
      ctx.moveTo(0, -s * 1.2)
      ctx.bezierCurveTo(s * 0.6, -s * 0.8, s * 0.7, -s * 0.2, s * 0.15, s * 0.1)
      ctx.bezierCurveTo(s * 0.5, s * 0.3, s * 0.2, s * 0.2, 0, s * 0.8)
      ctx.bezierCurveTo(-s * 0.2, s * 0.2, -s * 0.5, s * 0.3, -s * 0.15, s * 0.1)
      ctx.bezierCurveTo(-s * 0.7, -s * 0.2, -s * 0.6, -s * 0.8, 0, -s * 1.2)
      ctx.closePath()
      ctx.fill()
      ctx.strokeStyle = color
      ctx.globalAlpha = opacity * 0.5
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(0, -s * 1.1)
      ctx.lineTo(0, s * 0.6)
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      if (isPausedRef.current) { rafRef.current = requestAnimationFrame(animate); return }
      ctx.clearRect(0, 0, w, h)
      const sh = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      const sf = Math.min(scrollYRef.current / (sh - h), 1)
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i]
        p.life++
        p.x += p.vx + Math.sin(p.life * 0.02) * 0.3
        p.y += p.vy
        p.rotation += p.rotationSpeed
        const lr = Math.min(p.life / p.maxLife, 1)
        const fo = lr > 0.7 ? 1 - (lr - 0.7) / 0.3 : 1
        const co = p.opacity * fo * (1 - sf * 0.3)
        const r = 202 + sf * 53
        const g = 30 + sf * 100
        const b = 28 + sf * 80
        const color = `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`
        drawMapleLeaf(p.x, p.y, p.size, p.rotation, co, color)
        if (p.life >= p.maxLife || p.y > h + 100) {
          p.x = Math.random() * w; p.y = -50; p.life = 0
          p.maxLife = 300 + Math.random() * 600
          p.vx = (Math.random() - 0.5) * 0.3; p.vy = 0.3 + Math.random() * 0.7
        }
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  if (!isActive) return null
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" aria-hidden="true" />
}
