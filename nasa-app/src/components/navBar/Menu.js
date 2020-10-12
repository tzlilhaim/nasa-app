import React, { useState } from "react"
import NavBarLinks from "./NavBarLinks"
import "../../styles/menu.css"
import MenuIcon from "@material-ui/icons/Menu"

export default function Menu(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenuBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = (event) => {
    if (!event.target.matches(".menu-btn")) {
      setMenuIsOpen(false)
    }
  }

  const closeMenuOnLinkClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <div id="dropdown-menu" className={menuIsOpen ? "opened" : "closed"}>
      <button className="menu-btn" onClick={handleMenuBtnClick}>
        <span>{<MenuIcon />}</span>
      </button>
      <NavBarLinks
        activePath={props.activePath}
        closeMenuOnLinkClick={closeMenuOnLinkClick}
      />
    </div>
  )
}
