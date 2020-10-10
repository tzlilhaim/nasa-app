import React from "react"
import { Link } from "react-router-dom"

export default function NavBarLinks(props) {
  return (
    <div id="nav-bar-links">
      <Link
        to="/"
        className={props.activeTab === "home" ? "active-tab" : "inactive-tab"}
      >
        Home
      </Link>
      <Link
        to="/search"
        className={props.activeTab === "search" ? "active-tab" : "inactive-tab"}
      >
        Search
      </Link>
      <Link
        to="/favourites"
        className={props.activeTab === "favourites" ? "active-tab" : "inactive-tab"}
      >
        Favourites
      </Link>
    </div>
  )
}
