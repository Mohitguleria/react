// const { width } = require("@fortawesome/free-brands-svg-icons/fa42Group");
import { Link } from "react-router-dom";
const Restaurant = function (Props) {
  const { restaurant } = Props;
  const { info } = restaurant;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    id,
  } = info;

  return (
    <div className="restaurant-styles">
      <Link to={`/restaurants/${id}`} className="restaurant-link">
        <div className="img-container">
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          />
        </div>
        <div className="info-container">
          <h3>{name.length > 20 ? name.slice(0, 15) + "..." : name}</h3>
          <div>
            <span style={{ display: "flex", flexWrap: "wrap" }}>
              {cuisines.join(", ")}
            </span>
          </div>
          <p>{avgRatingString}</p>
          <p>{sla.slaString}</p>
          <p>{costForTwo}</p>
        </div>
      </Link>
    </div>
  );
};

module.exports = Restaurant;
