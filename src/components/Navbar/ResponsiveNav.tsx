"use client"
import React from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav.'

function ResponsiveNav() {
    const [showNav, setShowNav] = React.useState(false)

    const handleNavShow = () => {
        setShowNav(true);
        };
        const handleNavHide = () => {
        setShowNav(false);
        };
    
  return (
    <div>
        <Navbar openNav={handleNavShow} />
        <MobileNav showNav={showNav} closeNav={handleNavHide} />
    </div>
  )
}

export default ResponsiveNav