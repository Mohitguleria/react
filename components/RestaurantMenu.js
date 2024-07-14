import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=${resId}`
      );
      const { data } = await response.json();
      const {
        name,
        costForTwoMessage,
        avgRatingString,
        totalRatingsString,
        areaName,
        cuisines,
        sla,
        feeDetails,
      } = data?.cards[2]?.card?.card?.info;

      setRestaurant({
        name,
        costForTwoMessage,
        avgRatingString,
        totalRatingsString,
        areaName,
        cuisines,
        sla,
        feeDetails,
      });
    };
    fetchMenu();
  }, []);
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
