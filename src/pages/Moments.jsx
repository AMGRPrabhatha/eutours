const Moments = () => {
  return (
    <main className="container" style={{ marginTop: '140px', padding: '2rem 0 6rem', minHeight: '60vh' }}>
      <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Travel Moments</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '3rem' }}>Explore unforgettable experiences and memories from our travelers across Europe.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <img src="/images/paris.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Paris" />
          <img src="/images/italy.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Italy" />
          <img src="/images/Switzerland.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Switzerland" />
          <img src="/images/london.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in London" />
          <img src="/images/Amsterdam.jpg" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Amsterdam" />
          <img src="/images/home%20hero.webp" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} alt="Moment in Europe" />
      </div>
    </main>
  );
};

export default Moments;
