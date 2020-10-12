import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import "../../styles/container.css"

export default function Container(props) {
  const [tab, setTab] = useState(props.match.params.tab)

  useEffect(() => {
    setTab(props.match.params.tab)
  }, [props])
  props.setActiveTab(tab)

  return (
    <div id="container">
      {tab === "home" ? (
        <Redirect to={"/home"} />
      ) : tab === "search" ? (
        <Redirect to={"/search"} />
      ) : tab === "favourites" ? (
        <Redirect to={"/favourites"} />
      ) : (
        <Redirect to={"/home"} />
      )}
    </div>
  )
}
