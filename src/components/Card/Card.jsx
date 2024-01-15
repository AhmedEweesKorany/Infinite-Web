import React from 'react'
import {Link} from "react-router-dom"
function Card({item}) {
  return (
    <Link className='link' to={`/product/ternding/${item.id}`}>
    <div className='item-card'>

      <div className="image">
        {item.isNew && <span className='newseazon'>new seazon</span>}
        <img src={item.img} alt="" className="mainimg" />
        <img src={item.img2} alt="" className="secondimg" />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3 style={{textDecoration:"line-through"}}>{item.oldPrice}$</h3>
        <h3 >{item.newPrice}$</h3>
      </div>
    </div>
    
    </Link>
  )
}

export default Card