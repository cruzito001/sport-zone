import React, { useState, useEffect } from 'react';
import './CreateMatchModal.css';

interface CreateMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateMatchModal: React.FC<CreateMatchModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'creating' | 'completed'>('creating');
  const [matchId, setMatchId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setStatus('completed');
        setMatchId(`Match-${Math.floor(1000 + Math.random() * 9000)}`);
      }, 2000);
    } else {
      setStatus('creating');
      setCopied(false);
    }
  }, [isOpen]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(matchId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="create-match-modal-overlay">
      <div className="create-match-modal">
        <div className="modal-header">
          <div className="modal-buttons">
            <span className="modal-button red"></span>
            <span className="modal-button yellow"></span>
            <span className="modal-button green"></span>
          </div>
          <h2>Crear Partido</h2>
        </div>
        <div className="modal-content">
          {status === 'creating' ? (
            <div className="creating">
              <div className="spinner"></div>
              <p>Creando partido...</p>
            </div>
          ) : (
            <div className="completed">
              <div className="checkmark">✓</div>
              <h3>¡Partido creado exitosamente!</h3>
              <div className="match-id-container">
                <p>ID del Partido: <strong>{matchId}</strong></p>
                <button 
                  className={`copy-button ${copied ? 'copied' : ''}`}
                  onClick={copyToClipboard}
                  title="Copiar ID"
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
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

export default CreateMatchModal;

