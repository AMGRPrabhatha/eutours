const FilterBar = () => {
  return (
    <div className="filter-bar">
        <div className="container filter-container">
            <div className="filter-group">
                <button className="filter-btn">Location</button>
                <button className="filter-btn">Category</button>
                <button className="filter-btn">Availability</button>
                <button className="filter-btn">Price</button>
            </div>
            <button className="filter-btn" style={{ border: '1px solid var(--primary)', fontWeight: 600 }}>⚙️ Filters · 7</button>
        </div>
    </div>
  );
};

export default FilterBar;
