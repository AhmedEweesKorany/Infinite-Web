import React from "react";
import "./style.css";
function Side() {
  return (
    <div className="side">
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
