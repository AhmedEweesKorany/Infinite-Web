import React from 'react';
import "./Aboutus.css"
function AboutUs() {
  return (
    <div className='aboutparent'> 
        <div className="aboutheading">
      <h1>
        About Us
      </h1>
      <p>
InfiniteWeb boasts a dynamic and talented web solutions team dedicated to pushing the boundaries of innovation and excellence in the digital realm.</p>
    </div>
    <div className="aboutcontainer">
    <section className="about">
    <div className="about-image">
    <img src="https://bt.konicaminolta.in/wp-content/themes/Swaransoft/assets/images/production-printing-solution/infinite/Infinite.jpg" alt=""/>
    </div>
    <div className="about-content">
    <h2>INFINITE_WEB</h2>
    <p>Our team, comprised of skilled developers, designers, and strategists, collaborates seamlessly to deliver cutting-edge web solutions tailored to meet the unique needs of our clients. With a passion for creating immersive and user-centric experiences, we leverage the latest technologies and industry best practices to craft websites and applications that not only captivate audiences but also drive tangible results.</p>
    </div>
    </section>
    </div>
    </div>
 
  );
}
export default AboutUs;