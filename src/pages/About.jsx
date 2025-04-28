import React from "react";
import img1 from "../assets/img/about/about-1.png";

import img2 from "../assets/img/about/icon-1.svg"
import img3 from "../assets/img/about/icon-2.svg"
import img4 from "../assets/img/about/icon-3.svg"
import img5 from "../assets/img/about/icon-4.svg"
import img6 from "../assets/img/about/icon-5.svg"
import img7 from "../assets/img/about/icon-6.svg"

import img8 from "../assets/img/about/about-5.png"

import img9 from "../assets/img/about/about-6.png"
import img10 from "../assets/img/about/about-8.png"

const About = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-5 mt-8 px-5 md:px-0">
        <div className="w-full md:w-1/2 ">
          <img src={img1} alt="" className="rounded-3xl"/>
        </div>
        <div className="w-full md:w-1/2 shadow-md flex flex-col justify-center px-5">
          <h1 className="text-2xl font-bold text-gray-600">About Us</h1>
          <p className="text-gray-500">
            Welcome to Natural Circle, where nature and wellness come together
            in perfect harmony. At Natural Circle, we believe that living
            naturally is the first step toward a healthier, happier life. Our
            mission is simple — to bring you the finest organic products,
            carefully sourced and thoughtfully crafted, so you can nurture
            yourself and the planet. We are passionate about sustainability,
            purity, and authenticity. Every product we offer is free from
            harmful chemicals, ethically produced, and inspired by the healing
            power of nature. From farm to shelf, we ensure transparency,
            quality, and a commitment to making the world a greener place.
            Natural Circle isn't just a brand — it's a movement. A circle of
            people who believe that real change starts with the choices we make
            every day. Join us in celebrating nature's gifts and embracing a
            lifestyle that is healthy, conscious, and full of life. Welcome to
            the circle. Welcome to a natural way of living.
          </p>
        </div>
      </div>
      {/* what we provided */}
      <div className="mt-10">
        <h1 className="font-bold text-3xl text-gray-600 text-center">What We Provide?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-5">
            <div className="shadow-2xl text-center flex flex-col justify-center items-center py-5 px-5 rounded-md">
                <img src={img2} alt="" className="w-20"/>
                <div className="space-y-2 mt-3">

                <h2 className="font-semibold text-gray-700 ">Best Prices & Offers</h2>
                <p className="text-gray-500 text-sm">At Natural Circle, we believe that living a healthy, organic lifestyle should be affordable for everyone. That’s why we offer the best prices on high-quality natural products, along with exciting deals and discounts.</p>
                </div>
            </div>
            <div className="shadow-2xl text-center flex flex-col justify-center items-center py-5 px-5 rounded-md">
                <img src={img3} alt="" className="w-20"/>
                <div className="space-y-2 mt-3">

                <h2 className="font-semibold text-gray-700 ">Wide Assortment</h2>
                <p className="text-gray-500 text-sm">At Natural Circle, we offer a rich variety of organic products to suit every lifestyle.
                From farm-fresh fruits and vegetables to wholesome grains, herbal teas, natural skincare, and eco-friendly home essentials — we have everything you need to live naturally.</p>
                </div>
            </div>
            <div className="shadow-2xl text-center flex flex-col justify-center items-center py-5 px-5 rounded-md">
                <img src={img4} alt="" className="w-20"/>
                <div className="space-y-2 mt-3">

                <h2 className="font-semibold text-gray-700 ">Free Delivery</h2>
                <p className="text-gray-500 text-sm">At Natural Circle, we make healthy living even easier with Free Delivery on all eligible orders!
                Enjoy the convenience of getting your favorite organic products delivered right to your doorstep — fast, fresh, and hassle-free.</p>
                </div>
            </div>
            <div className="shadow-2xl text-center flex flex-col justify-center items-center py-5 px-5 rounded-md">
                <img src={img5} alt="" className="w-20"/>
                <div className="space-y-2 mt-3">

                <h2 className="font-semibold text-gray-700 ">Easy Returns</h2>
                <p className="text-gray-500 text-sm">At Natural Circle, your satisfaction is our top priority. our friendly customer support team is here to help. we’ve made returns as smooth as possible. Shop with confidence, knowing that we’ve got you covered every step of the way.</p>
                </div>
            </div>
            <div className="shadow-2xl text-center flex flex-col justify-center items-center py-5 px-5 rounded-md">
                <img src={img6} alt="" className="w-20"/>
                <div className="space-y-2 mt-3">

                <h2 className="font-semibold text-gray-700 ">100% Satisfaction</h2>
                <p className="text-gray-500 text-sm">At Natural Circle, we are committed to delivering 100% satisfaction with every order. our team is always ready to make it right. We believe in building lasting relationships with our customers based on honesty, reliability, and pure, natural goodness.</p>
                </div>
            </div>
            <div className="shadow-2xl text-center flex flex-col justify-center items-center py-5 px-5 rounded-md">
                <img src={img7} alt="" className="w-20"/>
                <div className="space-y-2 mt-3">

                <h2 className="font-semibold text-gray-700 ">Great Daily Deal</h2>
                <p className="text-gray-500 text-sm">At Natural Circle, every day is a chance to save! Our Great Daily Deals bring you exciting discounts on a wide range of organic products — from fresh produce to wellness essentials.  </p>
                </div>
            </div>
        </div>
      </div>
      {/* our performance  */}
      <div className="flex flex-col md:flex-row gap-5 px-5 md:px-0 mt-15">
        <div className="w-full md:w-1/2">
<img src={img8} alt="" />
        </div>
        <div className="w-full md:w-1/2 space-y-3 flex flex-col justify-center">
            <h3 className="text-gray-500">Our performance</h3>
            <h1 className="text-3xl text-gray-600 font-bold">Your Partner for e-commerce grocery solution</h1>
            <p className="text-gray-500 text-sm">
            At Natural Circle, we’re more than just an online organic store — we are your trusted partner for a complete e-commerce grocery solution. From fresh, natural products to seamless shopping experiences, we bring everything you need to your fingertips. Our platform is designed to offer a wide variety of organic groceries, fast delivery, easy returns, and outstanding customer support. Whether you're shopping for your family or managing a larger order, we are here to make your journey to healthier living simple, reliable, and rewarding.
            </p>
        </div>
      </div>
      {/* meet our team */}
      <div className="mt-15 px-5 md:px-0">
        <h1 className="text-3xl font-bold text-center text-gray-700">Our Team</h1>
        <div className="flex flex-col md:flex-row gap-5 mt-10">

        <div className="w-full md:w-1/4 space-y-3">
            <h1 className="text-3xl text-gray-600">Meet Our Expert Team</h1>
            <p className="text-sm text-gray-500">At Natural Circle, our expert team is dedicated to bringing you the best in organic products. From food specialists to customer service champions, each member shares a passion for wellness and sustainability. With years of experience and a commitment to quality, we work together to provide you with the finest natural choices for a healthier, greener lifestyle.</p>
            <p className="text-sm text-gray-500">From nutritionists and quality controllers to eco-conscious curators, we are all committed to ensuring that every product we offer meets the highest standards of quality and freshness. Together, we work to make healthy living more accessible and inspiring for you, every day.

</p>
            <button className="bg-[#29A56C] text-white px-2 py-2 rounded mb-2">View All Members</button>

        </div>
        <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 relative">
            <img src={img9} alt="" className="rounded"/>
            <div className="bg-white shadow-md absolute bottom-0 w-full text-center py-5">
                <h1 className="text-gray-800 text-xl font-bold">H. Merinda</h1>
                <p className="text-sm text-gray-500">CEO & Co-Founder</p>
            </div>

        </div>
        <div className="w-full md:w-1/2 relative">
            <img src={img10} alt="" className="rounded "/>
            <div className="bg-white shadow-md absolute bottom-0 w-full text-center py-5">
                <h1 className="text-gray-800 text-xl font-bold">CEO & Co-Founder</h1>
                <p className="text-sm text-gray-500">Head Engineer
                </p>
            </div>

        </div>
        

        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
