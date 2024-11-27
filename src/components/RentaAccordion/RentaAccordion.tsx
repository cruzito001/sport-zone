'use client'

import { useState } from 'react'
import './RentaAccordion.css'
import PaymentModal from '../PaymentModal/PaymentModal'

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
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  
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
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setIsPaymentModalOpen(true);
    } else {
      form.classList.add('form-validated');
    }
  }
  
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
                  <form className="payment-form" onSubmit={handleSubmit}>
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
                          required
                          pattern="\d{4}-\d{4}-\d{4}-\d{4}"
                          maxLength={19}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-');
                            e.target.value = formattedValue;
                          }}
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
                            required
                            pattern="(0[1-9]|1[0-2])\/([2-9][4-9]|[3-9][0-9])"
                            maxLength={5}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              const month = value.slice(0, 2);
                              const year = value.slice(2, 4);
                              if (month.length === 2 && year.length === 0) {
                                e.target.value = `${month}/`;
                              } else if (month.length === 2 && year.length > 0) {
                                e.target.value = `${month}/${year}`;
                              } else {
                                e.target.value = value;
                              }
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label>CVC</label>
                          <input
                            type="text"
                            placeholder="000"
                            className="form-input"
                            required
                            pattern="\d{3}"
                            maxLength={3}
                            onChange={(e) => {
                              e.target.value = e.target.value.replace(/\D/g, '');
                            }}
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
                            required
                            pattern="\d{5}"
                            maxLength={5}
                            onChange={(e) => {
                              e.target.value = e.target.value.replace(/\D/g, '');
                            }}
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
                    <button 
                      type="submit"
                      className="pay-button"
                      disabled={!selectedDate || !selectedTime}
                    >
                      Pagar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  )
}
