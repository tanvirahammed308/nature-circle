import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import hero1 from "../../assets/img/hero/hero-1.jpg";
import hero2 from "../../assets/img/hero/hero-2.jpg";

const Hero = () => {
  const data = [
    { id: 1, title: 'Experience the Pure Taste of Nature with Our Premium Organic Food Selection', image: hero1, description: 'Our carefully curated selection ensures that you enjoy the best in health and taste, straight from the farm to your home.' },
    { id: 2, title: 'Savor the Authentic Taste of Nature with Our Premium Organic Food Collection.', image: hero2, description:"Enjoy fresh, healthy, and delicious food, carefully selected and delivered straight from the farm to your home." },
  ];

  return (
    <div className="w-full mx-auto pt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <div
              className="relative w-full h-[500px]  overflow-hidden bg-center bg-cover"
              style={{ backgroundImage: `url(${card.image})` }}
            >
             
            

              {/* Text content */}
              <div className="absolute bottom-3 md:bottom-30 left-15 text-white z-10 w-1/2">
                <h2 className="text-3xl font-bold mb-2">{card.title}</h2>
                <p className="mb-4">{card.description}</p>
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                  See More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
