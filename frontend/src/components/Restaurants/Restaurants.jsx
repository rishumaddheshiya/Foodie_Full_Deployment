import React, {useContext} from 'react'
import './Restaurants.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from '../../Context/StoreContext';
const Restaurants = () => { 
  const {rest_list,url} = useContext(StoreContext);
    return (
        <div className='rest-display' id='restuarants'>
        <h2>Top Restaurants in Gorakhpur</h2>

        <div className='rest-display-list'>
{rest_list.map((item, index)=>{
    return (<div key={index} className='rest-item-img-container'>
    <img src={url+"/images/rest/"+item.image} className='rest-item-image'></img>
    <div className='rest-item-offer'>{item.offer}</div>

    <div className='rest-item-name'>{item.name}</div>
    
    <div className='rest-item-rating'><div className='rest-item-ratingimage'>
    
     <FontAwesomeIcon
          icon={faStar}
        />
            
        </div>
        
        <div>{item.rating}</div>
        <div>{item.time}</div>
        </div>
        <div className='rest-item-menu'>{item.menu}
          </div>
        <div className='rest-item-location'>{item.location}
          </div>
    </div>)
})}

        </div>

        </div>
    )
}

export default Restaurants
