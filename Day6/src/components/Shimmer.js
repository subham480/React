import ShimmerBody from "./ShimmerBody";

const Shimmer = () => {
  return (
    <div className="res-container">
      <div className="filter-section">
        <input name="res-search" className="searchbar shimmer" />
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
