import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log(useState([0]));
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.76879019999999&lng=76.5753719&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();

      console.log(json);
      setlistOfRestaurants(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
      );
    }
    fetchData();
  }, []);

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="res-container">
      <div className="filter-section">
        <input
          name="res-search"
          className="searchbar"
          placeholder="Search Restaurant "
          onChange={
            (e) => {
              //if (e.code === "Enter") {
              console.log(e.code);
              const inputValue = document.querySelector(".searchbar").value;
              console.log(inputValue);
              const filteredList = listOfRestaurants.filter((res) => {
                return inputValue.toLowerCase() == res.info.name.toLowerCase();
              });

              if (filteredList.length) {
                setlistOfRestaurants(filteredList);
              }
            }
            //   }
          }
        />
        <button
          className="btn allres-btn"
          onClick={() => {
            const filteredList = resList;

            setlistOfRestaurants(filteredList);
            document.querySelector(".searchbar").value = "";
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

            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-collection">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
