import React from "react"
import { Link } from "react-router-dom"
import "../../styles/navBarLinks.css"

export default function NavBarLinks(props) {
  const links = [
    <Link
      to="/home"
      className={props.activeTab === "home" ? "active-tab" : "inactive-tab"}
    >
      Home
    </Link>,
    <Link
      to="/search"
      className={props.activeTab === "search" ? "active-tab" : "inactive-tab"}
    >
      Search
    </Link>,
    <Link
      to="/favourites"
      className={
        props.activeTab === "favourites" ? "active-tab" : "inactive-tab"
      }
      onClick={props.closeMenuOnLinkClick}
    >
      Favourites
    </Link>,
  ]
  return (
    <div id="nav-bar-links">
      {links.map((link, index) => {
        return (
          <div className="menu-link" key={`menu-item-${index}`}>
            {link}
          </div>
        )
      })}
    </div>
  )
}
