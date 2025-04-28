
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from "../../assets/img/brands/brands-2.png"
import img2 from "../../assets/img/brands/brands-3.png"
import img3 from "../../assets/img/brands/brands-4.png"
import img4 from "../../assets/img/brands/brands-5.png"
import img5 from "../../assets/img/brands/brands-6.png"
import img6 from "../../assets/img/brands/brands-7.png"
import img7 from "../../assets/img/brands/brands-8.png"
import img8 from "../../assets/img/brands/brands-9.png"





const brands = [
  { id: 1, imageUrl: img1 },
  { id: 2, imageUrl: img2 },
  { id: 3, imageUrl: img3},
  { id: 4, imageUrl: img4 },
  { id: 5, imageUrl: img5 },
  { id: 6, imageUrl: img6 },
  { id: 7, imageUrl: img7 },
  { id: 8, imageUrl: img8 },
];

const BrandCarousel = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto py-10 px-3 md:px-0">
      
      <div className=' gap-10'>
        <h1 className='md:font-bold text-sm md:text-xl mb-10'>Our Partners</h1>
       
      <Swiper
      navigation={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      loop={brands.length > 3}
      slidesPerView={'5'}
      spaceBetween={20}
      className="rounded-xl overflow-hidden"
    >
      {brands.map((item) => (
       <SwiperSlide key={item.id} >
      
         
         {/* Image part (fixed height) */}
         <div className="flex justify-center items-center  shadow-lg">
           <img src={item.imageUrl} alt={item.name} className="w-20 md:w-28 object-contain" />
         </div>

     
      
     </SwiperSlide>
     
      ))}
    </Swiper>
      </div>
    </div>
  );
};

export default BrandCarousel;
