import React from "react"
import "../../styles/home.css"

export default function Home(props) {
  if (!props.isActiveTab) {
    props.setActiveTab("home")
  }
  return (
    <div id="home">
    </div>
  )
}
