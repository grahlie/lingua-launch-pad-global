import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'

const languages = [
  '即将推出',
  'Próximamente',
  'Bientôt disponible',
  'Prossimamente',
  'Demnächst',
  'Em breve',
  'قريباً'
]

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrentLanguage((prev) => (prev + 1) % languages.length)
        setIsFading(false)
      }, 500)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-custom flex items-center justify-center p-4 relative overflow-hidden">
      {/* WebGL Background */}
      <Background />
      <div className="absolute inset-0 bg-particles" />

      <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative z-10`}>
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/logotype.png"
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="relative z-10">
          {/* Main "Coming Soon" text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-glow bg-clip-text text-transparent bg-gradient-text">
            Coming Soon
          </h1>

          {/* Language transition text */}
          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-glow bg-clip-text text-transparent bg-gradient-text" data-text={languages[currentLanguage]}>
              {languages[currentLanguage]}
            </h2>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a href="#" className="btn-secondary">
            Notify Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
