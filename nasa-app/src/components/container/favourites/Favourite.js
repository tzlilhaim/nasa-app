import React from "react"
import { Redirect, Link } from "react-router-dom"
import "../../../styles/favourite.css"
import MediaCard from "../media/MediaCard"

export default function Favourite(props) {
  const favouriteId = props.match.params.id
  const favourite = props.favourites.find((f) => f._id === favouriteId)

  return favourite ? (
    <div id="favourite-detail" data-id={favourite.id}>
      <Link to={`/favourites`} className="back-btn">
        {"< Back"}
      </Link>
      <h2 className="favourite-title">{favourite.title}</h2>
      <MediaCard
        media={favourite}
        toggleLikeDislike={props.toggleLikeDislike}
      />
    </div>
  ) : (
    <Redirect to={`/favourites`} />
  )
}
