import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import logo from "../../assets/img/logo.png"
import { FiLogIn, FiShoppingBag } from 'react-icons/fi';

const MainHeader = () => {
  return (
    <div className='border-y border-gray-300'>
<div className="hidden  w-11/12 mx-auto md:flex justify-between py-3 ">
        {/* hero */}
        <div>

<img src={logo} alt="logo" />
        </div>

        {/* search field */}
      <div className="flex items-center border border-gray-300 rounded-2xl px-3 py-2 w-full max-w-sm bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-sm"
        />

        {/* Vertical Divider */}
        <div className="h-5 w-px bg-gray-300 mx-2" />

        {/* Search Icon Button */}
        <button className="p-1 rounded-full hover:bg-gray-100">
        <IoIosSearch className='text-2xl'/>


        </button>
      </div>
      {/* right-side */}
      <div className='flex gap-5 items-center'>
      <FiShoppingBag className='text-2xl'/>
      <FiLogIn className='text-2xl'/>


      </div>
    </div>
    </div>
    
  );
};

export default MainHeader;
