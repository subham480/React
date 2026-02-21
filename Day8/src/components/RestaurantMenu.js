import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  const [error, setError] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchResinfo();
  }, []);

  const fetchResinfo = async () => {
    try {
      console.log(resId);
      const data = await fetch(
        "https://corsproxy.io/?" +
          "https://namastedev.com/api/v1/listRestaurantMenu/" +
          resId,
      );

      const json = await data.json();
      console.log(json);

      if (!json.status)
        throw new Error(json.error || "Restaurant Menu not found");
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
      setResMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
      );
    } catch (e) {
      setError(e.message);
    }
  };
  if (!resInfo) return <div>{error}</div>;
  const {
    name,
    id,
    cuisines,
    costForTwoMessage,
    locality,
    sla,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo;

  console.log(resMenu);
  return (
    <div className="res-page">
      <div className="res-info">
        <div className="res-info-left">
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwoMessage}</p>
          <p>{locality}</p>
        </div>
        <div className="res-info-center">
          <p>{totalRatingsString}</p>
          <p>{sla.slaString}</p>
        </div>
        <div className="res-info-right">
          <img
            src={
              cloudinaryImageId[-1] === 1
                ? `${placeholderImage}`
                : `${CDN_URL + cloudinaryImageId}`
            }
          />
        </div>
      </div>
      <div className="res-menu">
        {resMenu.map((menu, index) =>
          Object.keys(menu).length == 0 ? (
            ""
          ) : (
            <div key={index} className="menu-details">
              <div className="menu-title">
                <h1>{menu?.card?.card?.title}</h1>
              </div>
              {menu?.card?.card?.itemCards.map((item) => {
                return (
                  <div key={item.card.info.id} className="menu-item">
                    <div>
                      <h2>{item.card.info.name}</h2>
                      <p>{item.card.info.description}</p>
                      <p>
                        Rs.
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </p>
                    </div>
                    <div>
                      <img
                        src={
                          item.card.info.imageId
                            ? `${CDN_URL + cloudinaryImageId}`
                            : placeholderImage
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
