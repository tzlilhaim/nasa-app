import React from "react"
import NavBarLinks from "./NavBarLinks"
import "../../styles/navBar.css"

export default function NavBar(props) {
  return (
    <div id="nav-bar">
      <NavBarLinks activeTab={props.activeTab} />
    </div>
  )
}
