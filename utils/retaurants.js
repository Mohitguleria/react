import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";
const useRestaurantDetails = (resId) => {
  const [responseData, setResponseData] = useState({
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
      const response = await fetch(RESTAURANT_MENU_API + resId);
      const { data } = await response.json();
      const resData = ({
        name,
        costForTwoMessage,
        avgRatingString,
        totalRatingsString,
        areaName,
        cuisines,
        sla,
        feeDetails,
      } = data?.cards[2]?.card?.card?.info);
      setResponseData(resData);
    };

    fetchMenu();
  }, []);
  return responseData;
};

export default useRestaurantDetails;
