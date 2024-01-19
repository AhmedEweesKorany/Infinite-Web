import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image from './image/de594ec09881da3fa66d98384a3c72ff.jpg'
import messi from './image/GettyImages-1450106798.webp'
import CR7 from './image/Cristiano-Ronaldo.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';

export default function Testimonial() {
    const reviews=[
        {
            'image':image,
            'review':"Their selection has something for every taste, from casual streetwear to sharp suits that would make Sir Alex Ferguson himself nod in approval. I found some treino gear that makes me feel like I could run circles around any defender, and some off-field pieces that are pure fire_think crisp lines, bold colors, and quality materials that hug you like a well-struck free kick.",
            'name':'John party',
            'job':'App developer'
        },
        {
            'image':messi,
            'review':"Finally, a clothing website that gets it! [Website name] has a fantastic selection of clothes in all sizes, and they actually flatter your curves. I used to dread shopping online because I never knew if things would fit, but I don't have that problem anymore with infinite web. Their size chart is accurate, and their return policy is super easy. Plus, their clothes are super cute and stylish! Thank you for making me feel confident!",
            'name':'Messi',
            'job':'FootBall Player'
        },
        {
            'image':CR7,
            'review':'Their selection has something for every taste, from casual streetwear to sharp suits that would make Sir Alex Ferguson himself nod in approval. I found some treino gear that makes me feel like I could run circles around any defender, and some off-field pieces that are pure fire_think crisp lines, bold colors, and quality materials that hug you like a well-struck free kick.',
            'name':'Cristiano Ronaldo',
            'job':'FootBall Player'
        }
    ]
  return (
    <>
        <div className="swipe_container">
            <Swiper navigation={true} modules={[Navigation,Pagination]} className="mySwiper" pagination={{dynamicBullets: true,}}>
                {reviews.map((review)=>{
                    return(
                        <>
                            <SwiperSlide className="personReview">
                                <div className="container slid">
                                    <div className="image">
                                        <img className='rounded-pill' src={review.image}/>
                                    </div>
                                    <div className="reviews_des">
                                        <p className="write">{review.review}</p>
                                        <h3>{review.name}</h3>
                                        <h6>{review.job}</h6>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </div>
    </>
  );
}