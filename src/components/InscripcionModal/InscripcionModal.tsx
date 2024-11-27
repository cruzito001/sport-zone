import React, { useState } from 'react';
import './InscripcionModal.css';

interface InscripcionModalProps {
  isOpen: boolean;
  onClose: () => void;
  torneoNombre: string;
}

const InscripcionModal: React.FC<InscripcionModalProps> = ({ isOpen, onClose, torneoNombre }) => {
  const [representante, setRepresentante] = useState('');
  const [equipo, setEquipo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [inscripcionExitosa, setInscripcionExitosa] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lógica de enviar form
    setInscripcionExitosa(true);
  };

  if (!isOpen) return null;

  return (
    <div className="inscripcion-modal-overlay">
      <div className="inscripcion-modal">
        <div className="modal-header">
          <div className="modal-buttons">
            <span className="modal-button red"></span>
            <span className="modal-button yellow"></span>
            <span className="modal-button green"></span>
          </div>
          <h2>{inscripcionExitosa ? 'Inscripción Exitosa' : `Inscripción para ${torneoNombre}`}</h2>
        </div>
        <div className="modal-content">
          {!inscripcionExitosa ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="representante">Representante:</label>
                <input
                  type="text"
                  id="representante"
                  value={representante}
                  onChange={(e) => setRepresentante(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="equipo">Nombre del equipo:</label>
                <input
                  type="text"
                  id="equipo"
                  value={equipo}
                  onChange={(e) => setEquipo(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="tel"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Inscribirse</button>
            </form>
          ) : (
            <div className="success-message">
              <div className="checkmark"></div>
              <h3>¡Inscripción Exitosa!</h3>
              <p>Su inscripción ha sido recibida. La organización del torneo se pondrá en contacto con usted pronto.</p>
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

export default InscripcionModal;

