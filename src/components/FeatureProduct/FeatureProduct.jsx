import React from 'react'
import Card from '../Card/Card'

const FeatureProduct = ({ type }) => {
  const data = [
    {
      "id": 1,
      "img": "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 1",
      "isNew": true,
      "oldPrice": 30.00,
      "newPrice": 24.99
    },
    {
      "id": 2,
      "img": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 2",
      "isNew": false,
      "oldPrice": 45.00,
      "newPrice": 39.99
    },
    {
      "id": 3,
      "img": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 3",
      "isNew": true,
      "oldPrice": 20.00,
      "newPrice": 15.99
    },
    {
      "id": 4,
      "img": "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "img2": "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "title": "Product 4",
      "isNew": false,
      "oldPrice": 55.00,
      "newPrice": 49.99
    }
  ]

  return (
    <div className='featureproduct'>

      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quisquam sequi ea possimus doloribus alias tempore, laboriosam voluptates recusandae repellat, quas mollitia molestiae sunt illum a id corrupti dolores facilis! Voluptates excepturi modi explicabo, saepe architecto porro magnam distinctio fugiat impedit debitis eaque blanditiis!</p>
      </div>
      <div className="bottom">

        {data.map(item=>(<Card item={item} key={item.id}/>))}
      </div>
    </div>
  )
}

export default FeatureProduct