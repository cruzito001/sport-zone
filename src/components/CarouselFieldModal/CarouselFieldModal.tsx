import React, { useState, useEffect } from 'react';
import '../RentFieldModal/RentFieldModal.css';

interface CarouselRentFieldModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  personName: string;
  placeName: string;
  address: string;
  phone: string;
}

const CarouselRentFieldModal: React.FC<CarouselRentFieldModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    personName: '',
    placeName: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setFormSubmitted(false);
      setFormData({
        personName: '',
        placeName: '',
        address: '',
        phone: '',
      });
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="rent-field-modal-overlay">
      <div className="rent-field-modal">
        <div className="modal-header">
          <div className="modal-buttons">
            <span className="modal-button red"></span>
            <span className="modal-button yellow"></span>
            <span className="modal-button green"></span>
          </div>
          <h2>Poner Mi Cancha en Renta</h2>
        </div>
        <div className="modal-content">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="personName">Nombre de la Persona:</label>
                <input
                  type="text"
                  id="personName"
                  name="personName"
                  value={formData.personName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="placeName">Nombre del lugar:</label>
                <input
                  type="text"
                  id="placeName"
                  name="placeName"
                  value={formData.placeName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Dirección:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Enviar información</button>
            </form>
          ) : (
            <div className="success-message">
              <div className="checkmark" />
              <h3>¡Información enviada con éxito!</h3>
              <p>Se le contactará en un máximo de 24 horas.</p>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="close-button">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselRentFieldModal;

