import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="card header">
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
      <div className="header-content">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="SportZone Logo" className="logo-image" />
        </a>
        
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/rentar">Rentar</a></li>
            <li><a href="/poner-en-renta">Poner en Renta</a></li>
            <li><a href="/crear-partido">Crear Partido</a></li>
            <li><a href="/unirse">Unirse a Partidos</a></li>
            <li><a href="/torneos">Torneos</a></li>
            <li><a href="/ranking">Ranking</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

