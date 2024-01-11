import React, { useState } from 'react'
import Side from './Side'
import im from "./ronaldo.jpg"

function Products() {
  let pro=[
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
    {title:"Ronaldo",text:"CR7"},
  ]
  return (
    <div className='products-container'>
        <Side />
       <div className="products-parent">
       <div className='products'>
              <div className="top">
                  <img src={im} className='top-img' alt="" />
              </div>
              <div className="bottom" >
                {
                  pro.map((item)=>{
                    return(
                      <div className="child">
                        <img src={im} alt=""  />
                            <h6 >{item.title}</h6>
                            <span >{item.text}</span>
                      </div>
                    )
                  })
                }
              </div>
        </div>
       </div>
    </div>
  )
}

export default Products
