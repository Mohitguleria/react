import { useState, useEffect } from "react";
import ShimmerCard from "../components/ShimmerCard";
import Restaurant from "../components/Restaurant";

const Body = function () {
  // const Restaurant = require("../components/Restaurant.js");
  // const ShimmerCard = require("../components/ShimmerCard.js");

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [missingRestaurantMsg, setMissingRestaurantMsg] = useState("");
  const [showRestaurant, setShowRestaurant] = useState(true);
  const [filteredList, setFilteredList] = useState(restaurantList);
  const [shimmerCardList] = useState([
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
    { name: "e" },
    { name: "f" },
    { name: "g" },
    { name: "h" },
    { name: "i" },
    { name: "j" },
  ]);

  const filterRestaurant = () => {
    setFilteredList(
      restaurantList.filter((restaurant) => restaurant.info.avgRating > 4)
    );
  };
  const filterReset = () => {
    setFilteredList(restaurantList);
  };
  const searchRestaurant = (e) => {
    setSearchText(e.target.value);
    if (e.target.value == "") {
      setShowRestaurant(true);
      setFilteredList(restaurantList);
    }
  };
  const filterSearchRestaurant = () => {
    const result = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText && result.length) {
      setShowRestaurant(true);
      setFilteredList(result);
    } else if (searchText && !result.length) {
      unavailableRestaurant(searchText);
    } else {
      setShowRestaurant(true);
      setFilteredList(restaurantList);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const { data } = await response.json();
      setRestaurantList(
        data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredList(
        data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };
    fetchData();
  }, []);

  const unavailableRestaurant = function (searchText) {
    setShowRestaurant(false);
    setMissingRestaurantMsg(`No match found for "${searchText}"`);
  };

  return (
    <>
      <div
        className="mt-8"
        style={{ fontFamily: '"Okra (woff2)", Helvetica, sans-serif' }}
      >
        <div className="absolute min-w-[350px] text-center text-[azure] -translate-x-2/4 -translate-y-2/4 left-2/4 top-[30%]">
          <h3 className="text-[90px] font-black mb-0">
            <i>zomato</i>
          </h3>
          <p className="text-[2rem]">
            Discover the best food & drinks in Chandigarh
          </p>
          <input
            className="min-w-[310px] h-[30px] rounded mb-20 text-black focus:outline-none p-3"
            type="search"
            value={searchText}
            onChange={searchRestaurant}
            placeholder="Search for restaurant, cuisine or a dish"
          />
          <button
            className="cursor-pointer h-[34px] bg-white border-opacity-100 text-black rounded-2xl px-2 py-1 hover:bg-yellow-200 active:bg-yellow-200 focus:bg-yellow-400"
            onClick={filterSearchRestaurant}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center mx-[90px] my-0">
          <button
            className="cursor-pointer rounded hover:rounded-lg border border-black bg-gray-500 px-2 py-1 mr-1"
            onClick={filterRestaurant}
          >
            4+ rated Restaurants
          </button>
          <button
            className="cursor-pointer rounded hover:rounded-lg border border-black bg-gray-500 px-2 py-1"
            onClick={filterReset}
            style={{ cursor: "pointer" }}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap justify-center mx-[90px] my-0">
          <>
            {!filteredList?.length &&
              shimmerCardList.map((card) => {
                return <ShimmerCard key={card.name} />;
              })}
            {filteredList &&
              showRestaurant &&
              filteredList.map((restaurant) => {
                return (
                  <Restaurant
                    key={restaurant.info.id}
                    restaurant={restaurant}
                  />
                );
              })}
            {!showRestaurant && <p>{missingRestaurantMsg}</p>}
          </>
        </div>
      </div>
    </>
  );
};

module.exports = Body;
