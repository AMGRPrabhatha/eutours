import React, { useState } from 'react';

const filters = ['Luxury Vans', 'Sedans', 'SUVs', 'Minibuses'];

const allVehicles = [
  { id: 1, type: 'Luxury Vans', name: 'Premium Drive', desc: 'Explore the vast landscapes in a sturdy luxury van.', image: '/images/black_luxury_van.png' },
  { id: 2, type: 'Luxury Vans', name: 'Group Travel Van', desc: 'Perfect for group travel across Europe.', image: '/images/van.jpg' },
  { id: 3, type: 'Sedans', name: 'Executive Sedan', desc: 'Arrive in style with our premium sedans.', image: '/images/sedan.webp' },
  { id: 4, type: 'Minibuses', name: 'Luxury Coach', desc: 'Ideal for large tour groups.', image: '/images/bus.jpg' },
  { id: 5, type: 'Luxury Vans', name: 'VIP V-Class', desc: 'The ultimate VIP transport.', image: '/images/black_luxury_van.png' },
  { id: 6, type: 'Sedans', name: 'City Sedan', desc: 'Navigate cities in absolute comfort.', image: '/images/sedan.webp' },
];

const VehicleActivities = () => {
  const [activeFilter, setActiveFilter] = useState('Luxury Vans');
  const [currentIndex, setCurrentIndex] = useState(2);

  const filteredVehicles = allVehicles.filter(v => activeFilter === 'All' || v.type === activeFilter || activeFilter === 'Luxury Vans'); // default fallback if empty

  // If filter changes, reset index
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(2);
  };

  const handleNext = () => {
    if (currentIndex < filteredVehicles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getCardClass = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'active-center';
    if (diff === -1) return 'medium-left';
    if (diff === -2) return 'small-left';
    if (diff === 1) return 'medium-right';
    if (diff === 2) return 'small-right';
    return 'hidden-card';
  };

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



      </div>
    </section>
  );
};

export default VehicleActivities;
