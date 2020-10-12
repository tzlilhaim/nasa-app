import React, { useState, useEffect } from "react"
import Logo from "../logo/Logo"
import "../../styles/navBar.css"
import Menu from "./Menu"

export default function NavBar(props) {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div id="nav-bar" className={isScrolled ? "sticky" : null}>
      <Menu activeTab={props.activeTab} />
      <Logo />
    </div>
  )
}
