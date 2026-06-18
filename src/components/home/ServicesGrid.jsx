import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  return (
    <section className="services-grid-wrapper">
      <Link to="/packages" className="service-panel" style={{ backgroundImage: "url('/images/island_tours.webp')" }}>
        <div className="service-panel-overlay"></div>
        <h3 className="service-panel-title">Europe Tour Packages</h3>
      </Link>
      <Link to="/contact?subject=Visa%20Assistance" className="service-panel" style={{ backgroundImage: "url('/images/airport_transfers.webp')" }}>
        <div className="service-panel-overlay"></div>
        <h3 className="service-panel-title">Visa Assistance & Travel Support</h3>
      </Link>
      <Link to="/book-vehicle" className="service-panel" style={{ backgroundImage: "url('/images/vehicle_fleet.webp')" }}>
        <div className="service-panel-overlay"></div>
        <h3 className="service-panel-title">Accommodation & Airport Pickup</h3>
      </Link>
    </section>
  );
};

export default ServicesGrid;
