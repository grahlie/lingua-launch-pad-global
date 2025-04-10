import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'

const languages = [
  'Coming Soon',
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
        <div className="mb-16">
          <img
            src="/03fee8d3-873b-475b-bbfa-b772e4e692b0.png"
            alt="Logo"
            className="w-[40rem] h-[40rem] mx-auto object-contain"
          />
        </div>

        <div className="relative z-10">
          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-glow bg-clip-text text-transparent bg-gradient-text" data-text={languages[currentLanguage]}>
              {languages[currentLanguage]}
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <a href="#" className="btn-secondary">
            Notify Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
