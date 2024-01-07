import React, { useState } from 'react'
import Side from './Side'
import im from "./ronaldo.jpg"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle'
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
    <div>
        <Side />
        <div className='products'>
              <div className="row">
                  <img src={im} className='top-img' alt="" />
              </div>
              <div className="row" >
                {
                  pro.map((item)=>{
                    return(
                      <div className="col-3 mt-5">
                        <img src={im} alt="" className="card-img" />
                            <h6 className="title mt-2">{item.title}</h6>
                            <span className="span price">{item.text}</span>
                      </div>
                    )
                  })
                }
              </div>
        </div>
    </div>
  )
}

export default Products