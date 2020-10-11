import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import "../../styles/container.css"

export default function Container(props) {
  const [activeTab, setActiveTab] = useState(props.match.params.tab)

  return (
    <div id="container">
      {activeTab === "home" ? (
        <Redirect to={"/home"} />
      ) : activeTab === "search" ? (
        <Redirect to={"/search"} />
      ) : activeTab === "favourites" ? (
        <Redirect to={"/favourites"} />
      ) : (
        <Redirect to={"/home"} />
      )}
    </div>
  )
}
