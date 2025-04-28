import React from 'react'
import SubHeader from './SubHeader'
import MainHeader from './MainHeader'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div>
        <SubHeader/>
        <MainHeader/>
        <Navbar/>
        <MobileNav/>
    </div>
  )
}

export default Header