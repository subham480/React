import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestauarants] = useState(
    [],
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://corsproxy.io/?" +
          "https://namastedev.com/api/v1/listRestaurants",
      );

      const json = await data.json();
      console.log(json);
      setlistOfRestaurants(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      setFilteredListOfRestauarants(
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    }
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <div className="filter-section">
        <div className="search-section">
          <input
            name="res-search"
            className="searchbar"
            placeholder="Search Restaurant "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn search-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase());
              });

              setFilteredListOfRestauarants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn allres-btn"
          onClick={() => {
            setFilteredListOfRestauarants(listOfRestaurants);
          }}
        >
          All Restaurant
        </button>
        <button
          className="btn filterd-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4.5;
            });

            setFilteredListOfRestauarants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-collection">
        {filteredListOfRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
