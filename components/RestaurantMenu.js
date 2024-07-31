import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantDetails from "../utils/retaurants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({
    name: "",
    costForTwoMessage: "",
    avgRatingString: "",
    totalRatingsString: "",
    areaName: "",
    cuisines: [],
    sla: { slaString: "" },
    feeDetails: {
      message: "",
    },
  });

  const responseData = useRestaurantDetails(resId);

  useEffect(() => {
    setRestaurant(responseData);
  }, [responseData]);

  return (
    <>
      <h1>{restaurant.name}</h1>
      <p>
        {restaurant.avgRatingString} ({restaurant.totalRatingsString}) •{" "}
        {restaurant.costForTwoMessage}
      </p>
      <p>{restaurant.cuisines.join(",")}</p>
      <p>
        <b>Outlet</b> {restaurant.areaName}
      </p>
      <p>
        <b>{restaurant.sla.slaString}</b>
      </p>
      <p>
        <b>{restaurant.feeDetails.message}</b>
      </p>
    </>
  );
};

export default RestaurantMenu;
