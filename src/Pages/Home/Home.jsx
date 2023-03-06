import React from 'react'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Slider from '../../Components/Slider/Slider'

import './Home.css';
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home
