import './AboutUs.css'

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="card main-card">
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
        <div className="content">
          <h1>Bienvenido a SportZone</h1>
          <p className="subtitle">Tu plataforma integral para el fútbol amateur</p>
          
          <div className="features">
            <div className="feature-card">
              <h3>Renta de Canchas</h3>
              <p>Encuentra y reserva las mejores canchas en tu área.</p>
            </div>
            <div className="feature-card">
              <h3>Organiza Partidos</h3>
              <p>Crea o únete a partidos con jugadores de tu nivel.</p>
            </div>
            <div className="feature-card">
              <h3>Torneos</h3>
              <p>Participa en emocionantes torneos locales y regionales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

