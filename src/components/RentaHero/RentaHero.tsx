import './RentaHero.css'

interface RentaHeroProps {
  nombre: string;
}

export default function RentaHero({ nombre }: RentaHeroProps) {
  return (
    <div className="renta-hero-container">
      <div className="card">
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
        <div className="hero-content">
          <img 
            src="/images/rentar-cancha.jpg" 
            alt="Campo de fútbol"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1>{nombre}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

