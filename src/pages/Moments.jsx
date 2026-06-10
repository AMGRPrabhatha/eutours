const Moments = () => {
  return (
    <main className="container" style={{ marginTop: '140px', padding: '2rem 0 6rem', minHeight: '60vh' }}>
      <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Travel Moments</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>Explore unforgettable experiences and memories from our travelers across Europe.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <img src="/images/paris_dest_1781075727792.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Paris" />
          <img src="/images/italy_vertical_1781089947416.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Italy" />
          <img src="/images/switzerland_vertical_1781089957980.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Switzerland" />
          <img src="/images/london_dest_1781077494703.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in London" />
          <img src="/images/amsterdam_dest_1781077507425.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Amsterdam" />
          <img src="/images/hero_bg_1781075622715.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Europe" />
      </div>
    </main>
  );
};

export default Moments;
