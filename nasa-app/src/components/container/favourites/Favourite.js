import React from "react"
import { Redirect } from "react-router-dom"
import "../../../styles/favourite.css"
import MediaCard from "../media/MediaCard"

export default function Favourite(props) {
  const isFound = false
  return isFound ? (
    <div className="favourite">
      <MediaCard />
    </div>
  ) : (
    <Redirect to={`/favourites`} />
  )
}
