import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
//importing react hook useState
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable- super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //this array destructuring on the fly

  //useEffect Hooks
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6111863&lng=77.43272619999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json.data);

    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // console.log(typeof listOfRestaurants);

  // this is an also known as conditional Rendering
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" classname="search-box"></input>
            <button className="search-btn">Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Here we will loop over resList to automatically display all the restaurantCard */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard
                    resData={resList[0]}
                    />
                <RestaurantCard
                    resData={resList[1]}
                    />
                <RestaurantCard
                    resData={resList[2]}
                    />
               
                 */}
      </div>
    </div>
  );
};

export default Body;
