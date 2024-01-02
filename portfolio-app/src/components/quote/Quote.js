import React from 'react'
import QuoteCard from "./QuoteCard"
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';
import "./quote.css";
const Quote = () => {
   const APIData=[{author:"Steve Jobs",
                    text:"The only way to do great work is to love what you do"},
                    {
                    author:"Eleanor Roosevelt",
                    text:"The future belongs to those who believe in the beauty of their dreams."

                    },
                    {
                        author:"Franklin D. Roosevelt",
                        text:"The only limit to our realization of tomorrow will be our doubts of today."
    
                        },
                    {
                        author:"Robert Frost",
                        text:"In three words I can sum up everything I've learned about life: it goes on."
        
                    }
                    ];
    const card=APIData.map((item)=>{
        if(item){
         return (<SwiperSlide><QuoteCard
        author={item.author}
        text = {item.text}/></SwiperSlide>
      )}
        return null
    })

  return (<section className="quotes  container section" id="quote">
    <h2 className="section_titile">Today's Quote</h2>
      <span className="section_subtitle">Best wish to you </span>
    <Swiper className="quotes_container"
     autoHeight={true}
     spaceBetween={20}
     navigation={true}
     pagination={{
       clickable: true,
     }}
     modules={[Navigation, Pagination]} >
        {card}
    </Swiper>
    </section>)


}

export default Quote