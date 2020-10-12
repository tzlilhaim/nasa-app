import React from "react"
import "../../../styles/favourites.css"
import MediaCard from "../media/MediaCard"
import EmptyState from "../../utils/EmptyState"

export default function Favourites(props) {
  const tabName = "favourites"

  return (
    <div id="favourites">
      <h2>Favourites:</h2>
      {props.favourites.length ? (
        props.favourites.map((f, index) => {
          return (
            <MediaCard
              media={f}
              key={`fav-media-${index}`}
              toggleLikeDislike={props.toggleLikeDislike}
              tabName={tabName}
            />
          )
        })
      ) : (
        <EmptyState tabName={tabName} />
      )}
    </div>
  )
}
