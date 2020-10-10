import React from "react"
import { Redirect } from "react-router-dom"
import "../../../styles/favourite.css"

export default function Favourite(props) {
  const isFound = false
  return isFound ? (
    <div className="favourite"></div>
  ) : (
    <Redirect to={`/favourites`} />
  )
}
