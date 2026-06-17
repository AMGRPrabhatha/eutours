import React, { useState } from 'react';

const filters = ['Luxury Vans', 'Sedans', 'SUVs', 'Minibuses'];

const VehicleActivities = () => {
  const [activeFilter, setActiveFilter] = useState('Luxury Vans');

  return (
    <section className="vehicle-activities-section section-padding" style={{ background: '#fff' }}>
      <div className="container">
        
        <div className="va-header text-center">
          <div className="va-pill">
            <span className="plus-icon">+</span> Vehicle Activity
          </div>
          <h2 className="va-title">
            Our <span className="text-theme">Premium</span> Fleet <span>Ensures A Seamless<br/>And Memorable Adventure.</span>
          </h2>
        </div>

        <div className="va-filters">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`va-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="va-slider-container">
          <div className="va-track">
            <div className="va-card small-left">
              <img src="/images/bus.jpg" alt="Luxury Bus" />
            </div>
            
            <div className="va-card medium-left">
              <img src="/images/sedan.webp" alt="Premium Sedan" />
            </div>

            <div className="va-card active-center">
              <div className="va-circular-cutout">
                <img src="/images/black_luxury_van.png" alt="Luxury Van" />
              </div>
              <div className="va-center-content">
                <div className="va-center-text">
                  <h3>Premium Drive</h3>
                  <p>Explore the vast landscapes in a sturdy luxury vehicle.</p>
                </div>
                <div className="va-arrow-icon">↗</div>
              </div>
            </div>

            <div className="va-card medium-right">
              <img src="/images/van.jpg" alt="Group Van" />
            </div>
            
            <div className="va-card small-right">
              <img src="/images/vehicle_fleet.jpg" alt="Eutours Fleet" />
            </div>
          </div>
        </div>

        <div className="va-slider-controls">
          <button className="va-control-btn">←</button>
          <div className="va-progress-bar">
            <div className="va-progress-fill"></div>
          </div>
          <button className="va-control-btn">→</button>
        </div>

      </div>
    </section>
  );
};

export default VehicleActivities;
