import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.css"
import FeatureProduct from '../../components/FeatureProduct/FeatureProduct'
import Category from '../../components/Category/Category'
import { useSelector } from 'react-redux'
function Home() {
  const state = useSelector(x=>x.Auth)
  console.log(state
  )
  return (
    <div className='Home'>
     <Slider/>
     <FeatureProduct type="feature"/>
     <Category/>
     <FeatureProduct type="trending"/>
    </div>
  )
}

export default Home