import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/addfood' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Food Items</p>
        </NavLink>
         <NavLink to='/addrest' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Restaurants</p>
        </NavLink>
        <NavLink to='/listfood' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List  Food Items</p>
        </NavLink>
         <NavLink to='/listrest' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Restaurants </p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
