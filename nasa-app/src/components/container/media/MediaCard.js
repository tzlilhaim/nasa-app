import React, { useState, useEffect } from "react"
import Media from "./Media"
import EmptyState from "../../utils/EmptyState"
import LikeDislikeBtn from "./LikeDislikeBtn"
import Description from "./Description"
import "../../../styles/mediaCard.css"

export default function MediaCard(props) {
  const [showBtn, setShowBtn] = useState({
    btnShow: false,
  })
  const [media, setMedia] = useState({
    ...props.media,
  })
  const [showDescription, setShowDiscription] = useState(false)

  useEffect(() => {
    if (props.tabName === "search" || props.tabName === "favourites") {
      setShowBtn(true)
    } else {
      setShowDiscription(true)
    }
  }, [props, media])
  return (
    <div className="media-card">
      {props.media.url ? (
        <Media media={props.media} />
      ) : (
        <EmptyState tabName={""} />
      )}
      {showBtn ? (
        <LikeDislikeBtn
          media={media}
          setMedia={setMedia}
          toggleLikeDislike={props.toggleLikeDislike}
        />
      ) : null}
      {showDescription ? <Description text={props.media.description} /> : null}
    </div>
  )
}
