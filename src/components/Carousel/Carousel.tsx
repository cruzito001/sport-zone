import { useState, useEffect, useCallback, useRef } from 'react'
import './Carousel.css'
import RentFieldModal from '../RentFieldModal/RentFieldModal'

const carouselItems = [
  { image: '/images/rentar-cancha.jpg', title: 'Rentar Cancha', link: '/rentar' },
  { image: '/images/poner-en-renta.jpg', title: 'Poner en Renta', link: '#' },
  { image: '/images/crear-partido.jpg', title: 'Crear Partido', link: '/partidos' },
  { image: '/images/unirse-partidos.jpg', title: 'Unirse a Partidos', link: '/partidos' },
  { image: '/images/unirse-torneo.jpg', title: 'Unirse a Torneo', link: '/torneos' },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselItems.length)
    }, 5000)
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setCurrentSlide(index)
    
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
    }
    
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
    
    startTimer()
  }, [isTransitioning, startTimer])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    }
  }, [startTimer])

  const handleExploreClick = (item: typeof carouselItems[0]) => {
    if (item.title === 'Poner en Renta') {
      setIsModalOpen(true)
      return
    }
    window.location.href = item.link
  }

  return (
    <div className="carousel-container">
      <div className="carousel-window">
        <div className="tools">
          <div className="circle">
            <span className="box red"></span>
          </div>
          <div className="circle">
            <span className="box yellow"></span>
          </div>
          <div className="circle">
            <span className="box green"></span>
          </div>
        </div>
        <div className="carousel-track-container">
          <div 
            className="carousel-track" 
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              pointerEvents: isTransitioning ? 'none' : 'auto'
            }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="carousel-content">
                  <h2>{item.title}</h2>
                  <button 
                    className="cta-button"
                    onClick={() => handleExploreClick(item)}
                  >
                    Explorar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {isModalOpen && <RentFieldModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

