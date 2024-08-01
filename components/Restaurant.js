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
    <div className="w-[218px] h-[347px] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.1)] transition-shadow duration-[0.3s] ease-[ease] cursor-pointer m-4 rounded-[10px] hover:bg-gray-300">
      <Link to={`/restaurants/${id}`} className="no-underline text-[black]">
        <div className="w-[217px] h-[145px] rounded-[10px]">
          <img
            className="object-cover rounded-[10px]"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          />
        </div>
        <div className="pb-0 p-4">
          <h3 className="m-0 font-bold">
            {name.length > 20 ? name.slice(0, 15) + "..." : name}
          </h3>
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
