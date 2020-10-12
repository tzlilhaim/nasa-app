import React from "react"
import Logo from "../logo/Logo"
import "../../styles/navBar.css"
import Menu from "./Menu"

export default function NavBar(props) {
  return (
    <div id="nav-bar" className={props.isContainerScrolled ? "sticky" : null}>
      <Menu activeTab={props.activeTab} />
      <Logo />
    </div>
  )
}
