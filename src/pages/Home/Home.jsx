import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.css"
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import Category from '../../components/Category/Category'
import Contact from '../../components/Contact/Contact'
function Home() {
  return (
    <div className='Home'>
     <Slider/>
     <FeatureProduct type="feature"/>
     <Category/>
     <FeatureProduct type="trending"/>
     <Contact/>
    </div>
  )
}

export default Home