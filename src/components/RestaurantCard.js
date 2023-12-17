import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) =>{
    const {resData} = props; //De-structuring on the fly
      return(
          <div className="res-card">
              <img className="res-logo" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} />
              <h2 className="res-heading">{resData.info.name}</h2>
              <h4 className="res-cusinie">{resData.info.cuisines.join(", ")}</h4>
              <h4 className="res-rating">{resData.info.avgRating} stars</h4>
              <h4 className="res-costForTwo">{resData.info.costForTwo}</h4>
              <h4 className="res-deliveryTime">{resData.info.sla.deliveryTime} minutes</h4>
          </div>
      );
  };

  export default RestaurantCard;