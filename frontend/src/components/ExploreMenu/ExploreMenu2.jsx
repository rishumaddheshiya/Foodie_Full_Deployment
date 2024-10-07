import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    items: 3
  },
  mobile: {
    breakpoint: { max: 800, min: 400 },
    items: 2
  }
};

const ExploreMenu2 = ({category,setCategory}) => {

  const {menu_list2} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
     
  
 
       
       
        {menu_list2.map((item,index)=>{
            return (
              //passing previous state and checking previous state is menu name or not if yes then all and if no then item ke menu kaa name
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                 key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                     <p>{item.menu_name}</p>
                </div>
             
         );
        })}
   
  
     

      
      <hr />
    </div>
  )
}

export default ExploreMenu2
