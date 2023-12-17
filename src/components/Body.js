import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
//importing react hook useState
import { useState } from "react";


const Body =() => {

    
    return(
        <div className="body">
            <div className="filter">
               
            </div>
            <div className="res-container">

              {/* Here we will loop over resList to automatically display all the restaurantCard */}

              {resList.map((restaurant)=>(
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