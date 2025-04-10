import { useEffect, useRef } from 'react'

class Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number

  constructor() {
    this.x = Math.random() * 2000 - 1000
    this.y = Math.random() * 2000 - 1000
    this.z = Math.random() * 2000 - 1000
    this.vx = Math.random() * 2 - 1
    this.vy = Math.random() * 2 - 1
    this.vz = Math.random() * 2 - 1
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.z += this.vz

    if (Math.abs(this.x) > 1000) this.vx *= -1
    if (Math.abs(this.y) > 1000) this.vy *= -1
    if (Math.abs(this.z) > 1000) this.vz *= -1
  }
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Initialize particles
    particles.current = Array.from({ length: 100 }, () => new Particle())

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    // Animation loop
    let animationFrame: number
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        particle.update()
        const scale = 1000 / (1000 + particle.z)
        const x = particle.x * scale + canvas.width / 2
        const y = particle.y * scale + canvas.height / 2
        const size = Math.max(0.5, 2 * scale)

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 180, 216, ${scale * 0.5})`
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}
