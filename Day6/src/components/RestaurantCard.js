import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
  const data = resData.resData.info;
  const { cloudinaryImageId, name, cuisines, locality, avgRating, slaString } =
    data;
  return (
    <div className="res-card">
      <div className="res-image">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-desc">
        <p>{name}</p>

        <p>
          {avgRating} - <span> {data.sla.slaString} </span>
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
