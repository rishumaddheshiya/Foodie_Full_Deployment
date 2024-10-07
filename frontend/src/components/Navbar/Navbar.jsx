import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import {
  BuildingOfficeIcon,
  HomeIcon,                                                         
 CakeIcon,
  PhoneIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid';
import logo from '../../assets/foodielogo.png'

import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { itemCount, token ,setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
    <div className='outerlogo'>
      <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      <h3>Foodie<span>.</span></h3>
      </div>
      <ul className="navbar-menu">
      
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
         <HomeIcon className='menu-icon'/> {' '}Home</Link>
        
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>
         <CakeIcon className='menu-icon'/>{' '}Foods</a>
         
        <a href='#restuarants' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>
       <BuildingOfficeIcon className='menu-icon'/>{' '}Restaurants</a>
        
        <a href='#contact-us' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>
        <PhoneIcon className='menu-icon'/>{' '}Contact</a>
      </ul>
      <div className="navbar-right">
        

        <Link to='/cart' className='navbar-search-icon'>
           <ShoppingBagIcon className='menu-icon'/>  {'  '} Cart
          <div className= "dot" >
       {itemCount}
          </div>
        </Link>
        {!token ? <button onClick={() => setShowLogin(true)}>Login</button>
         : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar
