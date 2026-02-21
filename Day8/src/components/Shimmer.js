import ShimmerBody from "./ShimmerBody";

const Shimmer = () => {
  return (
    <div className="res-container">
      <div className="filter-section">
        <div className="search-section">
          <input name="res-search" className="searchbar shimmer" />
          <button className="btn shimmer"></button>
        </div>
        <button className="btn shimmer"></button>
        <button className="btn shimmer"></button>
      </div>
      <div className="card-collection ">
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
        <ShimmerBody />
      </div>
    </div>
  );
};

export default Shimmer;
