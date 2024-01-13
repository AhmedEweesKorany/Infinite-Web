import React from 'react';
import "./Aboutus.css"
function AboutUs() {
  return (
    <div className='aboutparent'> 
        <div className="aboutheading">
      <h1>
        About Us
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusantium
        fugit, eaque modi totam animi id recusandae unde, itaque labore, veritatis dignissimos
        numquam cupiditate sit. Perferendis, voluptates excepturi! Nostrum, consequuntur.</p>
    </div>
    <div className="aboutcontainer">
    <section className="about">
    <div className="about-image">
    <img src="https://scriptpipeline.com/wp-content/uploads/2019/04/spider-man-into-the-spider-verse-movie-review-poster.jpg" alt=""/>
    </div>
    <div className="about-content">
    <h2>Warm embrace in a cup</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Nihil reiciendis distinctio excepturi laudantium labore ullam temporibus 
    eius praesentium minima quo, quos nostrum porro delectus maiores assumenda quam sed totam. A.</p>
    <a href="" className="read-more">Read More</a>
    </div>
    </section>
    </div>
    </div>
 
  );
}
export default AboutUs;