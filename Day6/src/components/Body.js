import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  console.log(useState([0]));
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
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
