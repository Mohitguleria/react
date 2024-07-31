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
      <div className="main-content-styles">
        <div className="centered">
          <h3>
            <i>zomato</i>
          </h3>
          <p>Discover the best food & drinks in Chandigarh</p>
          <input
            className="search-input"
            type="search"
            value={searchText}
            onChange={searchRestaurant}
            placeholder="Search for restaurant, cuisine or a dish"
          />
          <button className="search-button" onClick={filterSearchRestaurant}>
            Search
          </button>
        </div>
      </div>
      <div>
        {/* className="main-content-styles" <div className="centered">
        <h3>
          <i>zomato</i>
        </h3>
        <p>Discover the best food & drinks in Chandigarh</p>
        <input placeholder="Search for restaurant, cuisine or a dish" />
      </div> */}
        <div className="restaurant-container">
          <button onClick={filterRestaurant} style={{ cursor: "pointer" }}>
            4+ rated Restaurants
          </button>
          <button onClick={filterReset} style={{ cursor: "pointer" }}>
            Reset
          </button>
        </div>
        <div className="restaurant-container">
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
