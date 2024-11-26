import React, { useState, useEffect } from 'react';
import './JoinMatchModal.css';

interface JoinMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinMatchModal: React.FC<JoinMatchModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'joining' | 'completed'>('joining');

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setStatus('completed');
      }, 2000);
    } else {
      setStatus('joining');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="join-match-modal-overlay">
      <div className="join-match-modal">
        <div className="modal-header">
          <div className="modal-buttons">
            <span className="modal-button red"></span>
            <span className="modal-button yellow"></span>
            <span className="modal-button green"></span>
          </div>
          <h2>Unirse a Partido</h2>
        </div>
        <div className="modal-content">
          {status === 'joining' ? (
            <div className="joining">
              <div className="spinner"></div>
              <p>Procesando inscripción...</p>
            </div>
          ) : (
            <div className="completed">
              <div className="checkmark">✓</div>
              <h3>¡Te has inscrito exitosamente!</h3>
              <p>Ya formas parte del partido. ¡Prepárate para jugar!</p>
            </div>
          )}
        </div>
        {status === 'completed' && (
          <div className="modal-footer">
            <button onClick={onClose} className="close-button">Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinMatchModal;

