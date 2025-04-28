import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../assets/img/home/vertical-banner-ready-1.png"
import img2 from "../../assets/img/home/vertical-banner-ready-2.png"
import useDataStore from '../../hook/useDataStore';
import { BsCart3 } from 'react-icons/bs';
import { IoIosArrowRoundForward } from 'react-icons/io';


const DealOfTheDay = () => {
    const [data]=useDataStore();

    const filterDealOfTheDay=data.filter((item)=>item.dealOfDay == true);
    // console.log(filterDealOfTheDay);
   
  return (
    <div className='w-full md:w-11/12 mx-auto mt-10'>
    <div className="block md:flex  justify-center   gap-4 p-4 space-y-8 md:space-y-0">
      {/* Left Side - Image Carousel */}
      <div className="w-full md:w-1/4 ">
      <h1 className='mb-2 font-bold text-xl'>Campaigns</h1>
        <Swiper
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <img src={img1} alt="Slide 1" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Slide 2" className="w-full h-auto" />
          </SwiperSlide>
          
        </Swiper>
      </div>

      {/* Right Side - Card Carousel */}
      <div className="w-full md:w-3/4 ">
      <div className='flex items-center gap-10'>
        <h1 className='md:font-bold text-sm md:text-xl'>Deals of The Day</h1>
        <div className='w-px h-5 border border-gray-300'/>
        <p className='text-gray-400 text-sm'>Sale up to 30% off on selected items.</p>
      </div>
      <Swiper
      navigation={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      loop={filterDealOfTheDay.length > 3}
      slidesPerView={'auto'}
      spaceBetween={20}
      
      className="rounded-xl overflow-hidden"
    >
      {filterDealOfTheDay.map((item) => (
       <SwiperSlide key={item.id} className="!w-[220px] md:!w-[250px]">
       <div className="flex flex-col p-4 bg-white rounded-xl shadow-md h-[450px] mt-2 relative">
         
         {/* Image part (fixed height) */}
         <div className="flex justify-center items-center h-36">
           <img src={item.img} alt={item.name} className="w-20 md:w-28 object-contain" />
         </div>

         {/* discount */}
         <div className='absolute top-0 right-0 px-4 text-red-400 py-3'>
            {item.discountPercentage}%
         </div>
     
         {/* Divider */}
         <div className="w-full border-t border-gray-200 my-4"></div>
     
         {/* Content part (flex-grow) */}
         <div className="flex flex-col justify-between flex-grow space-y-3">
           <div className='flex-grow space-y-4'>
             <h3 className="text-base text-gray-800">{item.name}</h3>
             <div className="flex gap-5 text-sm mt-2">
               <p className="text-gray-600 line-through">${item.previousPrice}</p>
               <p className="text-[#019267]">${item.recentPrice}</p>
             </div>
             <p className="text-xs md:text-sm text-gray-600 mt-2">{item.description}</p>
             <p className="text-sm text-[#019267] mt-2">Stock: {item.stock}</p>
           </div>

           
         {/* Divider */}
         <div className="w-full border-t border-gray-200 my-4"></div>
     
           {/* Buttons */}
           <div className="flex justify-between mt-4">
             <button className="bg-[#019267] p-2 rounded-full text-white">
               <BsCart3 />
             </button>
             <button className="bg-[#019267] p-2 rounded-full text-white">
               <IoIosArrowRoundForward />
             </button>
           </div>
         </div>
     
       </div>
     </SwiperSlide>
     
      ))}
    </Swiper>
      </div>
    </div>

    </div>
  )
}

export default DealOfTheDay