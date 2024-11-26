'use client'

import { useState } from 'react'
import './RentaAccordion.css'

interface RentaAccordionProps {
  numCampos: number;
}

const horarios = [
  "9:00am",
  "10:30am",
  "12:00pm",
  "2:30pm",
  "4:30pm"
]

export default function RentaAccordion({ numCampos }: RentaAccordionProps) {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  
  const getNextFourDays = () => {
    const days = [];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                   'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    for (let i = 0; i < 4; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        day: date.getDate(),
        month: months[date.getMonth()]
      });
    }
    return days;
  }

  const nextDays = getNextFourDays();
  
  return (
    <div className="renta-container">
      {Array.from({ length: numCampos }, (_, i) => (
        <div key={i} className="accordion-item">
          <div className="accordion-header">
            <div className="mac-buttons">
              <span className="mac-button red"></span>
              <span className="mac-button yellow"></span>
              <span className="mac-button green"></span>
            </div>
            <button 
              className="accordion-title"
              onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
            >
              Cancha {i + 1}
            </button>
          </div>
          {activeAccordion === i && (
            <div className="accordion-content">
              <div className="renta-grid">
                <div className="campo-section">
                  <div className="field-image">
                    <img src="/images/poner-en-renta.jpg" alt="Campo deportivo" />
                  </div>
                  <div className="calendar-section">
                    <div className="month-selector">
                      <span>{nextDays[0].month}</span>
                    </div>
                    <div className="dates-grid">
                      {nextDays.map(({ day }) => (
                        <button
                          key={day}
                          className={`date-button ${selectedDate === day.toString() ? 'selected' : ''}`}
                          onClick={() => setSelectedDate(day.toString())}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                    <div className="time-slots">
                      {horarios.map((horario) => (
                        <button
                          key={horario}
                          className={`time-slot ${selectedTime === horario ? 'selected' : ''}`}
                          onClick={() => setSelectedTime(horario)}
                        >
                          {horario}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="payment-section">
                  <h2>Métodos de pago</h2>
                  <div className="payment-form">
                    <div className="payment-options">
                      <label className="payment-option">
                        <input type="radio" name={`payment-${i}`} value="card" defaultChecked />
                        <span>Tarjeta de crédito/débito</span>
                      </label>
                      <div className="card-input-container">
                        <input
                          type="text"
                          placeholder="0000-0000-0000-0000"
                          className="card-number-input"
                        />
                        <div className="card-logos">
                          <img src="/images/visa-logo.webp" alt="Visa" className="card-logo" />
                          <img src="/images/mastercard-logo.png" alt="Mastercard" className="card-logo" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Fecha de Expiración</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label>CVC</label>
                          <input
                            type="text"
                            placeholder="000"
                            className="form-input"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>País</label>
                          <input
                            type="text"
                            value="México"
                            readOnly
                            className="form-input"
                          />
                        </div>
                        <div className="form-group">
                          <label>Código Postal</label>
                          <input
                            type="text"
                            placeholder="12345"
                            className="form-input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="payment-divider">
                      <span>o</span>
                    </div>
                    <label className="payment-option">
                      <input type="radio" name={`payment-${i}`} value="paypal" />
                      <span>PayPal</span>
                      <img src="/images/paypal-logo.png" alt="PayPal" className="paypal-logo" />
                    </label>
                    <button className="pay-button">
                      Pagar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

