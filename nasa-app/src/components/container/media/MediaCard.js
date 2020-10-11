import React, { useState, useEffect } from "react"
import Media from "./Media"
import EmptyState from "../../utils/EmptyState"
import "../../../styles/mediaCard.css"

export default function MediaCard(props) {
  const [medias, setMedias] = useState([...props.medias])
  const [likeDislikeBtn, setLikeDislikeBtn] = useState({})
  const [showDescription, setShowDiscription] = useState(false)

  useEffect(() => {
    setMedias([...props.medias])
    let showBtn = false,
      btnText = "",
      btnFunc = null,
      showDescription = false
    if (props.tabName === "search" || props.tabName === "favourites") {
      showBtn = true
      if (showBtn) {
        btnText = props.tabName === "search" ? "+" : "-"
        btnFunc =
          props.tabName === "search"
            ? props.toggleLikeDislike.like
            : props.toggleLikeDislike.dislike
      }
    } else {
      showDescription = true
    }
    setLikeDislikeBtn({ showBtn, btnFunc, btnText })
    setShowDiscription(showDescription)
  }, [props])

  return (
    <div className="all-media-cards">
      {medias.length ? (
        medias.map((media, index) => {
          return (
            <div className="media-card" key={`media-card-${index}`}>
              <Media
                media={media}
                likeDislikeBtn={likeDislikeBtn}
                showDescription={showDescription}
              />
            </div>
          )
        })
      ) : props.isSearched ? (
        <EmptyState />
      ) : (
        <div>Enter keywords to search for images</div>
      )}
    </div>
  )
}
