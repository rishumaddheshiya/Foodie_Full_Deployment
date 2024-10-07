import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { foodonmind_list } from './exploremenuitem';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 7
  },
  desktop2: {
    breakpoint: { max: 2000, min: 1500 },
    items: 6
  },
   desktop3: {
    breakpoint: { max: 1500, min: 1250 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1250, min: 1100 },
    items: 4
  },
   tablet2: {
    breakpoint: { max: 1100, min: 800 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 800, min: 550 },
    items: 4
  },
   mobiles: {
    breakpoint: { max: 550, min: 300 },
    items: 4
  }
};


const FoodOnMind = ({category,setCategory}) => {
   
  return (
  <div className='explore-menu' id='explore-menu-on-mind'>
    
      <hr/>  <h1>What's On Your Mind ?</h1>
    
      
     <Carousel responsive={responsive} swipeable={false}
     draggable={true}
     showDots={false}
  autoPlay={true}
  infinite={true}
  autoPlaySpeed={1000}
  >
      
        {foodonmind_list.map((item,index)=>{
            return (
               <div className='explore-menu-list-on-mind' key={index}>
                
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                
                  </div>
         )
        })}
          
       </Carousel>
     <hr/>
    </div>
   
  )
}

export default FoodOnMind