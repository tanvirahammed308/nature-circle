import React from 'react'
import Hero from '../components/home/Hero'
import BannerCard from '../components/home/BannerCard'
import DealOfTheDay from '../components/home/DealOfTheDay'
import Popular from '../components/home/Popular'
import CustomerTestimonials from '../components/home/CustomerTestimonials'
import BrandCarousel from "../components/home/BrandCarousel"


const Home = () => {
  return (
    <div>
        <Hero/>
        <BannerCard/>
        <DealOfTheDay/>
        <Popular/>
        <CustomerTestimonials/>
        <BrandCarousel/>
    </div>
  )
}

export default Home