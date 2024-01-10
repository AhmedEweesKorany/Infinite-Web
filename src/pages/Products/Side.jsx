import React from "react";
import "./style.css";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
function Side() {
  return (
    <div className="side">
      <div className="toggelIcons">
        <div className="close" onClick={()=>{
          document.querySelector(".side").style.translate="-300px"
          document.querySelector(".side").style.transition="0.4s ease"
          document.querySelector(".open").style.display="block"
          document.querySelector(".close").style.display="none"
          document.querySelector('.products-parent').style.marginLeft="-200px"
          document.querySelector(".products-parent").style.transition="0.4s ease"

        }}>
          <CloseIcon/>
        </div>
        <div className="open" style={{display:"none"}} onClick={()=>{
                    document.querySelector(".side").style.translate="0"
                    document.querySelector(".side").style.transition="0.4s ease"
                    document.querySelector(".close").style.display="block"
                    document.querySelector(".open").style.display="none"
          document.querySelector('.products-parent').style.marginLeft="0"
                 
          
        }}>
            <MenuIcon/>
        </div>
      </div>
      <h4 className="h4">Prducts category</h4>

      <div>
        <input type="checkbox" name="Hats" value="Hats" />
        <label for="Hats"> Hats</label>
      </div>
      <div>
        <input type="checkbox" name="T-shirtS" value="T-shirtS" />
        <label for="T-shirtS"> T-shirtS</label>
      </div>
      <div>
        <input type="checkbox" name="Coats" value="Coats" />
        <label for="Coats"> Coats</label>
      </div>
      <div>
        <input type="checkbox" name="Hoodies" value="Hoodies" />
        <label for="Hoodies"> Hoodies</label>
      </div>
      <div>
        <input type="checkbox" name="Shoes" value="Shoes" />
        <label for="Shoes"> Shoes</label>
      </div>
      <div>
        <input type="checkbox" name="Bags" value="Bags" />
        <label for="Bags"> Bags</label>
      </div>
      <div>
        <input type="checkbox" name="Shirts" value="Shirts" />
        <label for="Shirts"> Shirts</label>
      </div>
      <div>
        <input type="checkbox" name="Belts" value="Belts" />
        <label for="Belts"> Belts</label>
      </div>
      <div>
        <input type="checkbox" name="Jeans" value="Jeans" />
        <label for="Jeans"> Jeans</label>
      </div>

      <br />
      <br />
      <h4 className="h4">Filter By Price</h4>
      <input type="range" name="" id="" />

      <br />
      <br />
      <h4 className="h4">Sort By </h4>
      <div>
        <input type="radio" name="price" value="lower-first" />
        <label for="lower-first">Price (lower first)</label>
      </div>
      <div>
        <input type="radio" name="price" value="highest-first" />
        <label for="highest-first">Price (highest-first)  </label>
      </div>
    </div>
  );
}

export default Side;
