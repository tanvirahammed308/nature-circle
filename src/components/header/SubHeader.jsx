import React from 'react'
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const SubHeader = () => {
  return (
    <div className='hidden md:block'>
        <div className='w-11/12 mx-auto flex justify-between py-3'>
        {/* left-side */}
        <div>
            <h6 className='text-sm text-[#343131] font-semibold'>FREE SHIPPING FOR ALL ORDERS OF $340
            </h6>

        </div>
        {/* center-side */}
        <div className='flex gap-5'>
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
        <FaWhatsapp />




        </div>
        {/* right-side */}
        <div className='flex gap-2'>
            {/* lan */}
        <div className='flex items-center gap-2'>
    <label className="block text-sm  ">Language</label>
    <select className="border rounded text-sm">
      <option value="en">English</option>
      <option value="bn">বাংলা</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
    </select>
  </div>
  {/* currency */}
  <div className='flex items-center gap-2'>
    <label className="block text-sm  ">Currency</label>
    <select className="border rounded text-sm">
      <option value="USD">USD - $</option>
      <option value="BDT">BDT - ৳</option>
      <option value="EUR">EUR - €</option>
      <option value="INR">INR - ₹</option>
    </select>
  </div>
        </div>

        </div>
    </div>
  )
}

export default SubHeader