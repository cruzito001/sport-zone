import React, { useState, useEffect } from 'react';
import './PaymentModal.css';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [paymentStatus, setPaymentStatus] = useState<'processing' | 'completed'>('processing');
  const [folio, setFolio] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Simular el proceso de pago
      setTimeout(() => {
        setPaymentStatus('completed');
        setFolio(`SpZne-${Math.floor(1000 + Math.random() * 9000)}`);
      }, 3000);
    } else {
      setPaymentStatus('processing');
      setCopied(false);
    }
  }, [isOpen]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(folio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <div className="modal-header">
          <div className="modal-buttons">
            <span className="modal-button red"></span>
            <span className="modal-button yellow"></span>
            <span className="modal-button green"></span>
          </div>
          <h2>Pago</h2>
        </div>
        <div className="modal-content">
          {paymentStatus === 'processing' ? (
            <div className="processing">
              <div className="spinner"></div>
              <p>Procesando pago...</p>
            </div>
          ) : (
            <div className="completed">
              <div className="checkmark">✓</div>
              <h3>Gracias por su pago</h3>
              <div className="folio-container">
                <p>Su folio es: <strong>{folio}</strong></p>
                <button 
                  className={`copy-button ${copied ? 'copied' : ''}`}
                  onClick={copyToClipboard}
                  title="Copiar folio"
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
            </div>
          )}
        </div>
        {paymentStatus === 'completed' && (
          <div className="modal-footer">
            <button onClick={onClose} className="close-button">
              Cerrar
            </button>
            <button className="create-game-button">
              Crear Partido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;

