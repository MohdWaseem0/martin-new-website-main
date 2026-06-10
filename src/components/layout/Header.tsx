"use client"

import React, { useState } from "react"
import { Navbar } from "./Navbar"
import { MobileMenu } from "./MobileMenu"

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <Navbar onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header
