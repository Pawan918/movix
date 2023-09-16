import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './../home/trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
function Home() {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <div className="" style={{height: 1000}}></div>
    </div>
  )
}

export default Home