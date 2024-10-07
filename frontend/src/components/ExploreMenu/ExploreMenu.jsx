import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list,menu_list2} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                                                                                                  
      <div className='explore-menu-list'>
      
        {menu_list.map((item,index)=>{
            return (
              //passing previous state and checking previous state is menu name or not if yes then all and if no then item ke menu kaa name
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                     <p>{item.menu_name}</p>
                </div>
             
         )
        })}
      </div>
       <div className='explore-menu-list'>
      
        {menu_list2.map((item,index)=>{
            return (
              //passing previous state and checking previous state is menu name or not if yes then all and if no then item ke menu kaa name
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                     <p>{item.menu_name}</p>
                </div>
             
         )
        })}
      </div>
   
     

      
      <hr />
    </div>
  )
}

export default ExploreMenu
