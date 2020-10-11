import React from "react"
import Favourite from "./Favourite"
import "../../../styles/favourites.css"

export default function Favourites(props) {
  const tabName = "favourites"
  return (
    <div id="favourites">
      {props.favourites.map((f, index) => {
        return (
          <Favourite
            favourite={f}
            key={`fav-media-${index}`}
            toggleLikeDislike={props.toggleLikeDislike}
          />
        )
      })}
    </div>
  )
}
