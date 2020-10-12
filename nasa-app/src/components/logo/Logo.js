import React from "react"
import "../../styles/logo.css"
import nasaLogo from "./nasa-logo.png"

export default function Logo(props) {
  return (
    <div id="app-logo">
      <img src={nasaLogo} alt="NASA"></img>
    </div>
  )
}
