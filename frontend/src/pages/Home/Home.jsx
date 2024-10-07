import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Restaurants from '../../components/Restaurants/Restaurants.jsx'
import FoodOnMind from '../../components/ExploreMenu/FoodOnMind'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
       <FoodOnMind setCategory={setCategory} category={category}/>
      <ExploreMenu setCategory={setCategory} category={category}/>
     
      <FoodDisplay category={category}/>
      <Restaurants/>
    </>
  )
}

export default Home
