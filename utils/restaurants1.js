import { RESTAURANT_MENU_API } from "./constants";
const useRestaurantDetails = (resId) => {
  const fetchMenu = async () => {
    const response = await fetch(RESTAURANT_MENU_API + resId);
    const { data } = await response.json();
    const responseData = ({
      name,
      costForTwoMessage,
      avgRatingString,
      totalRatingsString,
      areaName,
      cuisines,
      sla,
      feeDetails,
    } = data?.cards[2]?.card?.card?.info);
    return responseData;
  };
  return fetchMenu();
};

export default useRestaurantDetails;
