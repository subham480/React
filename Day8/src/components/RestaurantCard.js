import { CDN_URL } from "../utils/constants";
import placeholderImage from "url:../assets/placeholder-light.avif";

const RestaurantCard = (resData) => {
  const data = resData.resData.info;
  const { cloudinaryImageId, name, cuisines, locality, avgRating, sla } = data;
  return (
    <div className="res-card">
      <div className="res-image">
        <img
          src={
            cloudinaryImageId.trim()[cloudinaryImageId.trim().length - 1] ===
            "1"
              ? placeholderImage
              : `${CDN_URL + cloudinaryImageId}`
          }
        />
      </div>
      <div className="res-desc">
        <p>{name}</p>

        <p>
          ⭐{avgRating} - <span>⌛{sla.slaString} </span>
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
