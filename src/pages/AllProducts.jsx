import React, { useState } from 'react'
import useDataStore from '../hook/useDataStore'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';

import banner1 from "../assets/img/cate/banner-9.png";
import banner2 from "../assets/img/cate/banner-11.png"
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [data] =useDataStore();
  const [cat,setCat]=useState("All");
  const filterCat=new Set(data.map((item)=>item.category))
 const fullCate=["All",...filterCat]

 const selectedCat=cat =="All" ?data: data.filter((item)=>item.category ==cat)
  


 
  return (
    <div className='w-full md:w-11/12 mx-auto mb-10 mt-8'>
      {/* banner */}
      <div className='bg-[#019267] py-3 px-10 rounded '>
        <h1 className='text-center text-white text-2xl'>All Products Category</h1>
{/* menu */}
        <div className='flex justify-center gap-10 py-3'>
          {
            fullCate.map((item,index)=><button key={index} className='text-white text-center cursor-pointer' onClick={()=>setCat(item)}>{item}</button>)
          }

        </div>
        

      </div>
      {/* card section */}
      <div className='flex flex-col-reverse md:flex-row'>
          {/* left */}
          <div className='flex flex-col w-full md:w-1/4 px-2'>
            <div className='shadow-2xl mt-3'>
              <img src={banner2} alt="" className='h-[500px]'/>
            </div>
            <div className='shadow-2xl mt-10'>
              <h2 className='text-[#019267] text-center'>Home Delivery is available</h2>
              <img src={banner1} alt="" className='h-[500px] rounded'/>
            </div>
            

          </div>
{/* right */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[300px] md:w-3/4 mx-auto md:px-3'>
            {
              selectedCat.map((item)=> <div className="flex flex-col p-4 bg-white rounded-xl shadow-md h-[450px] mt-2 relative">
                       
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

export default AllProducts