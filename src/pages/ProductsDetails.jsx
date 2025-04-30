import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useDataStore from '../hook/useDataStore';
import { FaFacebook, FaSquareXTwitter, FaTelegram } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import img1 from "../assets/img/cate/banner-11.png"
import { BsCart3 } from 'react-icons/bs';
import { IoIosArrowRoundForward } from 'react-icons/io';

const ProductsDetails = () => {
    const {id}=useParams();
    const [data]=useDataStore();
   const filteredData=data.find((item)=>item.id == id)

   const relatedProducts=data.filter((item)=>item.category ==filteredData.category && item.id !=id)

   if(!filteredData){
    return <div>loading...</div>
   }
 
  return (
    <div className='w-full md:w-11/12 mx-auto mt-15 px-5 md:px-0'>
        {/* product details */}
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='w-full md:w-1/4 shadow-md rounded'>
                <img src={filteredData.img} alt="" className='object-contain'/>
            </div>
            <div className='w-full md:w-3/4 shadow-md rounded flex flex-col md:flex-row justify-between'>
            <div className='px-10 py-3 space-y-5'>
            <h1 className='text-2xl font-bold text-gray-800'>{filteredData.name}</h1>
                <p className='text-gray-500'>{filteredData.description}</p>
                <div className='flex gap-10'>
                    <p className='text-gray-500'>Category:{filteredData.category}</p>
                    <p className='text-gray-500'>Discount:{filteredData.discountPercentage}</p>
                </div>
                <div className='flex gap-10'>
                    <p className='text-red-500 line-through'>Category:{filteredData.previousPrice}</p>
                    <p className='text-gray-500'>Discount:{filteredData.recentPrice}</p>
                </div>
                <p className='text-[#019267]'>Stock:{filteredData.stock}</p>
                <button className='bg-[#019267] text-white px-5 py-2 rounded'>Buy Now</button>

                <div className='flex text-[#019267] text-2xl gap-5'>
                    <FaFacebook />
                                            <FaSquareXTwitter />
                                            <FaInstagramSquare />
                                            <FaTelegram />

                    
                </div>

            </div>
            <div className='w-full md:w-[300px]'>
                <img src={img1} alt="" />

            </div>
              

            </div>
        </div>
        {/* static description */}
        <div className='border-y-2 border-gray-300 mt-15 space-y-3 py-5'>
            <h1 className='text-2xl font-semibold text-gray-800'>Description</h1>
            <p className='text-gray-500 '>
            Have questions about our products, services, or anything else? Natural Circle is here to assist you! Whether you're looking for more information about our organic offerings, shipping details, or our sustainability practices, our team is ready to provide the answers you need.

Feel free to reach out to us, and we’ll get back to you as soon as possible. We’re here to ensure your experience with us is as seamless and enjoyable as possible.


            </p>
        </div>
        {/* related products */}
        <div className='space-y-3 mt-5'>
            <h1 className='text-xl font-semibold text-gray-800 '>Our Related Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    relatedProducts.map((item)=><div className="flex flex-col p-4 bg-white rounded-xl shadow-md w-full md:w-[250px] h-[450px] mt-2 relative">
                       
                    {/* Image part (fixed height) */}
                    <div className="flex justify-center items-center h-36">
                      <img src={item.img} alt={item.name} className="w-20 md:w-28 object-contain" />
                    </div>
           
                    {/* discount */}
                    <div className='absolute top-3 right-3 p-2 text-white bg-[#019267] rounded text-sm'>
                       {item.discountPercentage}%
                    </div>
                
                    {/* Divider */}
                    <div className="w-full border-t border-gray-200 my-4"></div>
                
                    {/* Content part (flex-grow) */}
                    <div className="flex flex-col justify-between flex-grow space-y-3">
                      <div className='flex-grow space-y-2'>
                        <h3 className="text-base text-gray-800">{item.name}</h3>
                        <div className="flex gap-5 text-sm mt-2">
                          <p className="text-gray-600 line-through">${item.previousPrice}</p>
                          <p className="text-[#019267]">${item.recentPrice}</p>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 mt-2">{item.description}</p>
                        <p className="text-sm text-[#019267] mt-2">Stock: {item.stock}</p>
                        <p className="text-sm text-[#019267] mt-2">Category: {item.category}</p>
                      </div>
           
                      
                    {/* Divider */}
                    <div className="w-full border-t border-gray-200 my-4"></div>
                
                      {/* Buttons */}
                      <div className="flex justify-between mt-4">
                       <Link >
                        <button className="bg-[#019267] p-2 rounded-full text-white">
                          <BsCart3 />
                        </button>
                       
                       </Link>
                       <Link to={`/allproducts/${item.id}`}>
                        <button className="bg-[#019267] p-2 rounded-full text-white">
                          <IoIosArrowRoundForward />
                        </button>
                       </Link>
                      </div>
                    </div>
                
                  </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default ProductsDetails