import React, { useState } from 'react'
import logo from "../../assets/img/logo.png"
import { CiMenuFries } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const MobileNav = () => {
    const [open,setOpen]=useState(false)

    const toggleNav=()=>{
        setOpen(!open)
    }
  return (
    <div className='flex justify-between items-center md:hidden py-5 px-2 relative'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div className='text-3xl' onClick={toggleNav}>

            {
                open ? <IoCloseOutline />:<CiMenuFries />


            }

        </div>
        
            {
                open && (
                    <div className='absolute top-23  right-0 bg-[#2F480E] w-3/4 h-screen  pt-5 z-30 rounded '>
                        <ul className=' w-full flex flex-col items-center mt-10 space-y-4'>
                            <li className=' '>
                                <Link to="/" className='text-xl font-bold text-white '>Home</Link>
                            </li>
                            <li className=' '>
                                <Link to="/allproducts" className='text-xl font-bold text-white '>All Products</Link>
                            </li>
                            <li className=' '>
                                <Link to="/about" className='text-xl font-bold text-white '>About Us</Link>
                            </li>
                            <li className=' '>
                                <Link to="/contact" className='text-xl font-bold text-white '>Contact</Link>
                            </li>
                        </ul>
                        <div className='border-t border-gray-400 mt-10'>

                        </div>
                        <div className='text-white text-3xl flex gap-10  justify-center mt-10'>
                        <FaFacebook />
                        <FaSquareXTwitter />
                        <FaInstagramSquare />



                        </div>

                    </div>
                )
            }
        </div>
    
  )
}

export default MobileNav