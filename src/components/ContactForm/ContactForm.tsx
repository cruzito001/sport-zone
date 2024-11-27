import { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', { name, email, message })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h3>¡Mensaje Enviado!</h3>
        <p>Gracias por contactarnos. Te responderemos pronto.</p>
      </div>
    )
  }

  return (
    <div className="form-container">
      <h2>Envíanos un Mensaje</h2>
      <p className="form-description">
        Completa el formulario y nos pondremos en contacto contigo pronto.
      </p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre completo"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="¿En qué podemos ayudarte?"
            required
          />
        </div>

        <button type="submit">
          Enviar Mensaje
        </button>
      </form>
    </div>
  )
}

export default ContactForm

