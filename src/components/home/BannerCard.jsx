import React from "react";
import img1 from "../../assets/img/bannerCard/banner-1.png";
import img2 from "../../assets/img/bannerCard/banner-2.png";
import img3 from "../../assets/img/bannerCard/banner-3.png";
import img4 from "../../assets/img/bannerCard/banner-4.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const BannerCard = () => {
  const context = [
    {
      id: 1,
      img: img1,
      title: " PREPARED & DELI",
      des: "Discover All Your Favorite Brands in One Place",
      btnColor: "#FE7743",
    },
    {
      id: 2,
      img: img2,
      title: " BREAKFAST",
      des: "The organic grocery that keeps your wallet happy",
      btnColor: "#03A791",
    },
    {
      id: 3,
      img: img3,
      title: "VEGETABLES",
      des: "Shop all your favorite labels under one roof on Agricoma",
      btnColor: "#3A59D1",
    },
    {
      id: 4,
      img: img4,
      title: "DRIED FRUITS",
      des: "Your budget-friendly organic grocery store on the way",
      btnColor: "#F75A5A",
    },
  ];

  return (
    <div className="w-full md:w-11/12 mx-auto mt-10">
        {/* banner */}
        <div className=" grid md:grid-cols-4 gap-6">
        {context.map((item) => (
        <div
          key={item.id}
          className="rounded bg-cover bg-center  p-6 h-[300px] flex flex-col justify-between"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-sm mt-2">{item.des}</p>
          </div>
          <button
            className="w-max mt-4 py-2 px-4 rounded-full text-white font-medium"
            style={{ backgroundColor: item.btnColor }}
          >
            Shop Now
          </button>
        </div>
      ))}
        </div>

        {/* new banner */}
        <div className="bg-[#019267] text-white mt-10 py-10 px-8 rounded-t-md flex flex-col md:flex-row justify-between gap-5">
            <div>
           

                <h1 className="font-semibold text-2xl"> New generation products are at Agricoma with limited stocks!</h1>
                <p>New generation T-Shirts are at agricoma with limited stocks!
                </p>
            </div>
            <button className="flex items-center bg-[#FFDC00] text-black  md:px-5 px-2 py-3  rounded w-[150px] md:w-[180px] ">
                Check Products <IoIosArrowRoundForward />

            </button>

        </div>
      
    </div>
  );
};

export default BannerCard;
