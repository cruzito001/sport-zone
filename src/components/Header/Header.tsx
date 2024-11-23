import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          SportZone
        </a>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
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

