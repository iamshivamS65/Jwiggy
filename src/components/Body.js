import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
//importing react hook useState
import { useState } from "react";


const Body =() => {
    
    //Local state variable- super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
   
    
    return(
        <div className="body">
            <div className="filter">
            <button className="filter-btn" 
            onClick={()=>{
            const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
        );
        setListOfRestaurants(filteredList);
    }}>Top Rated Restaurants</button>

            </div>
            <div className="res-container">

              {/* Here we will loop over resList to automatically display all the restaurantCard */}

              {
              listOfRestaurants.map((restaurant)=>(
              <RestaurantCard key={restaurant.id} resData={restaurant} />
              ))
              }
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