import React, { useState } from 'react';
import './PartidosAccordion.css';
import CreateMatchModal from '../CreateMatchModal/CreateMatchModal';
import JoinMatchModal from '../JoinMatchModal/JoinMatchModal';

const PartidosAccordion: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const toggleAccordion = (accordionId: string) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreateModalOpen(true);
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsJoinModalOpen(true);
  };

  return (
    <div className="partidos-accordion">
      <h1 className="partidos-title">Partidos</h1>
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion('crear')}>
          <div className="mac-buttons">
            <span className="mac-button red"></span>
            <span className="mac-button yellow"></span>
            <span className="mac-button green"></span>
          </div>
          <h2>Crear Partido</h2>
        </div>
        {activeAccordion === 'crear' && (
          <div className="accordion-content">
            <form className="partido-form" onSubmit={handleCreateSubmit}>
              <div className="form-group">
                <label htmlFor="folioCancha">Folio de Cancha:</label>
                <input type="text" id="folioCancha" name="folioCancha" required />
              </div>
              <div className="form-group">
                <label htmlFor="equipoLocal">Equipo Local:</label>
                <input type="text" id="equipoLocal" name="equipoLocal" required />
              </div>
              <div className="form-group">
                <label htmlFor="equipoVisitante">Equipo Visitante:</label>
                <input type="text" id="equipoVisitante" name="equipoVisitante" required />
              </div>
              <div className="form-group">
                <label htmlFor="tipoPartido">Tipo de Partido:</label>
                <select id="tipoPartido" name="tipoPartido" required>
                  <option value="">Selecciona un tipo</option>
                  <option value="amistoso">Amistoso</option>
                  <option value="competitivo">Competitivo</option>
                  <option value="entrenamiento">Entrenamiento</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Crear Partido</button>
            </form>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion('unirse')}>
          <div className="mac-buttons">
            <span className="mac-button red"></span>
            <span className="mac-button yellow"></span>
            <span className="mac-button green"></span>
          </div>
          <h2>Unirse a Partido</h2>
        </div>
        {activeAccordion === 'unirse' && (
          <div className="accordion-content">
            <form className="partido-form" onSubmit={handleJoinSubmit}>
              <div className="form-group">
                <label htmlFor="folioPartido">Folio de Partido:</label>
                <input type="text" id="folioPartido" name="folioPartido" required />
              </div>
              <div className="form-group">
                <label htmlFor="nombreJugador">Nombre del Jugador:</label>
                <input type="text" id="nombreJugador" name="nombreJugador" required />
              </div>
              <div className="form-group">
                <label htmlFor="equipoRepresentar">Equipo a Representar:</label>
                <select id="equipoRepresentar" name="equipoRepresentar" required>
                  <option value="">Selecciona un equipo</option>
                  <option value="local">Local</option>
                  <option value="visitante">Visitante</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="posicion">Posición Preferida:</label>
                <select id="posicion" name="posicion" required>
                  <option value="">Selecciona una posición</option>
                  <option value="portero">Portero</option>
                  <option value="defensa">Defensa</option>
                  <option value="mediocampista">Mediocampista</option>
                  <option value="delantero">Delantero</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Unirse al Partido</button>
            </form>
          </div>
        )}
      </div>

      <CreateMatchModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
      <JoinMatchModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
};

export default PartidosAccordion;

