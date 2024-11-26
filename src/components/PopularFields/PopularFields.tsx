import React from 'react';
import './PopularFields.css';
import { popularFields } from '../../data/popularFields';

const PopularFields = () => {
  return (
    <section className="popular-fields">
      <div className="card">
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
          <h2>Canchas Populares</h2>
          <div className="fields-grid">
            {popularFields.map((field, index) => (
              <div key={index} className="field-card">
                <h3>{field.nombre}</h3>
                <p><strong>Tipo:</strong> {field.tipo}</p>
                <p><strong>Césped:</strong> {field.tipo_cesped}</p>
                <p className="extras">{field.extras}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${field.coordenadas[0]},${field.coordenadas[1]}`} target="_blank" rel="noopener noreferrer" className="map-link">Ver en mapa</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularFields;
