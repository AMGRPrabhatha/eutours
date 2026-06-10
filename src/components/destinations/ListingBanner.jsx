const ListingBanner = () => {
  return (
    <section className="listing-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
            <h1 className="banner-title">Top Europe Tours</h1>
            <div className="banner-search">
                <input type="text" placeholder="Search for anything in Europe..." />
                <button className="btn">Search</button>
            </div>
        </div>
    </section>
  );
};

export default ListingBanner;
