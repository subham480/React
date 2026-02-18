import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";

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
            const loadMoreRestaurants = async () => {
              try {
                const response = await axios.post(
                  "https://corsproxy.io/?" +
                    encodeURIComponent(
                      "https://www.swiggy.com/dapi/restaurants/list/update",
                    ),
                  {
                    lat: "28.65420",
                    lng: "77.23730",
                    nextOffset: "CJhlELQ4KIDg7Z7vlr+3ZDCnEw==",
                    widgetOffset: {
                      NewListingView_category_bar_chicletranking_TwoRows: "",
                      NewListingView_category_bar_chicletranking_TwoRows_Rendition:
                        "",
                      Restaurant_Group_WebView_PB_Theme: "",
                      Restaurant_Group_WebView_SEO_PB_Theme: "",
                      collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
                        "39",
                      inlineFacetFilter: "",
                      restaurantCountWidget: "",
                    },
                    filters: {},
                    seoParams: {
                      seoUrl: "https://www.swiggy.com/restaurants",
                      pageType: "FOOD_HOMEPAGE",
                      apiName: "FoodHomePage",
                      businessLine: "FOOD",
                    },
                    page_type: "DESKTOP_WEB_LISTING",
                    _csrf: "kh1XePxag4ut-Xu5q1l8cKmelQeKsHqOyxZTGuls",
                  },
                  {
                    headers: {
                      "Content-Type": "application/json", // ✅ Only this!
                      // No User-Agent, Referer, etc.
                    },
                    timeout: 10000, // ✅ Axios bonus
                  },
                );

                console.log(response);
              } catch (error) {
                console.error(error.response?.status, error.message);
              }
            };
            loadMoreRestaurants();
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
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
