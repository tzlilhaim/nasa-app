import React, { useEffect } from "react"
import MediaCard from "../media/MediaCard"
import EmptyState from "../../utils/EmptyState"

export default function Favourites(props) {
  useEffect(() => {
    const pathName = `${window.location.pathname.replace("/", "")}`
    props.setActivePath(pathName)
  }, [props])

  return (
    <div id="favourites">
      <h2>Favourites</h2>
      <div id="all-favourites">
        {props.favourites.length ? (
          props.favourites.map((f, index) => {
            return (
              <MediaCard
                media={f}
                key={`fav-media-${index}`}
                toggleLikeDislike={props.toggleLikeDislike}
              />
            )
          })
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}
